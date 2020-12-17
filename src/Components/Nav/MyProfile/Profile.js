import React from 'react'
import classes from './Profile.module.css'
import MyPost from '../MyProfile/MyPost/MyPost'
import OtherInfo from './OtherInfo/OtherInfo'
import FriendsMini from "../MyFriends/FriendsMini/FriendsMini";
import FriendsMiniOnline from "../MyFriends/FriendsMiniOnline/FriendsMiniOnline"
import GroupsIconMini from "../Groups/GroupeIconMini/GroupsIconMini";


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textStart: 'Показать подробная информация',
            show: false,
            showBlock: null,

        }
    }

    render() {
        const countDate = () => {
            return ((new Date().getTime() - new Date(this.props.userInfo.info.date)) / (24 * 3600 * 365.25 * 1000)) | 0
        }//высчитать количество лет

        const age = () => {
            const num = countDate();
            let lastNum = num.toString().split('').pop();

            if (lastNum === '1') {
                return 'год'
            } else if (lastNum === '2' || lastNum === '3' || lastNum === '4') {
                return 'года'
            } else {
                return 'лет'
            }
        }//добавить окончание

        const finalText = () => {
            let arrMount = ["января", "февраля", "марта", "апрель", "май", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
            let text = this.props.userInfo.info.date;
            let removeDash = text.split('-')
            let year = removeDash[0], month = removeDash[1], day = removeDash[2];
            let cutNum = month.slice(1, 2)
            return day + ' ' + arrMount[cutNum - 1] + ' ' + year

        }// дата в формате ДД.ММ.ГГ

        const pushBlock = () => {

            if (this.state.textStart === 'Показать подробная информация') {
                this.setState({
                    textStart: 'Скрыть подробную информацию', showBlock:
                        <OtherInfo
                            study={this.props.userInfo.info.study}
                            work={this.props.userInfo.info.work}
                            hobbies={this.props.userInfo.info.hobbies}
                            education={this.props.userInfo.info.education}/>
                })
            } if (this.state.textStart === 'Скрыть подробную информацию') {
                this.setState({textStart: 'Показать подробная информация', showBlock: null})

            }
        }// скрыть/показать блок информации

        let arrFriends = this.props.friends;

        let miniBlockFriends = arrFriends.slice(0, 6)
        //обрезать до 6 друзей

        const elementFriendMini = miniBlockFriends.map((el, index) =>
            <FriendsMini name={el.name} ava={el.ava} key={index}/>)

        const numFriends = this.props.friends.length
        //количество друзей

        const numOnline = this.props.friends.filter(item => {
            if (item.statusUser) {
                return true
            }
        })//отфильтровать друзей которые онлайн

        const miniBlockOnline = numOnline.slice(0, 6)
        //обрезать до 6 друзей которые онлайн

        const elementFriendsMiniOnline = miniBlockOnline.map((el, index) =>
            <FriendsMiniOnline name={el.name} ava={el.ava} key={index}/>)

        const arrForBlock = []
        numOnline.length !== 0 ? arrForBlock.push(classes.profile_friends_mini_block) : arrForBlock.push(null)
        //убрать/показать блок при 0 друзей онлайн

        const groups = this.props.groups
        const groupsSlice = groups.slice(0, 5)
        //обрезать до 5 групп

        const elementGroupMini = groupsSlice.map((el, index) =>
            <GroupsIconMini name={el.name} ava={el.ava} category={el.category} key={index}/>)


        return (

            <div className={classes.profile_flex}>
                <div className={classes.leftBlock}>
                    <div className={classes.profile_avatar}>
                        <div className={classes.avatar_user}>
                            <img src={this.props.userInfo.avatar} alt="avatar"/>
                        </div>
                        <div className={classes.avatar_button}>
                            <a href=""><img src="img/setting3.png" alt=""/></a>

                        </div>
                    </div>

                    <div className={classes.profile_friends}>
                        <div className={classes.info_friends}>Друзья
                            <span className={classes.numFriends}>{numFriends}</span>
                        </div>
                        <div className={classes.profile_friends_mini_block}>{elementFriendMini}</div>

                    </div>
                    <div className={classes.profile_friends_num_online}>
                        <div className={classes.profile_friends_num_online_text}>Друзья онлайн
                            <span className={classes.numFriends}>{numOnline.length}</span>
                        </div>
                        <div className={arrForBlock.join(' ')}>{elementFriendsMiniOnline}</div>
                    </div>

                    <div className={classes.profile_group}>
                        <div className={classes.info_friends}>Подписки
                            <span className={classes.numFriends}>{groups.length}</span>
                        </div>
                        <div className={classes.profile_groups}>{elementGroupMini}</div>

                    </div>
                    {/*<div className={classes.profile_album}>album</div>*/}
                    {/*<div className={classes.profile_videos}>videos</div>*/}

                </div>

                <div className={classes.rightBlock}>
                    <div className={classes.profile_info}>

                        <div
                            className={classes.nameUserName}>{this.props.userInfo.info.name} {this.props.userInfo.info.surname}</div>
                        <input type="text" className={classes.status} defaultValue='изменить статус'/>
                        <hr className={classes.hr}/>
                        <div className={classes.data}>
                            <div className={classes.date_block}> Дата рождения:</div>
                            <div className={classes.date_age}>{finalText()}
                                <span
                                    className={classes.data_age_block}>{`${countDate()} ${age()}`}</span></div>
                        </div>


                        <div className={classes.country}>
                            <div className={classes.block_country_city_block}>Страна:</div>
                            <div className={classes.block_country_city_wrap}>{this.props.userInfo.info.country}</div>
                        </div>

                        <div className={classes.city}>
                            <div className={classes.block_country_city_block}>Город:</div>
                            <div className={classes.block_country_city_wrap}>{this.props.userInfo.info.city}</div>
                        </div>

                        <div className={classes.arrowDown} onClick={pushBlock}>{this.state.textStart}</div>

                    </div>
                    <div>{this.state.showBlock}</div>

                    <div className={classes.profile_content}>

                        <MyPost inpValue={this.props.postState.newPostText}
                                comments={this.props.postState.postData}
                                newPostText={this.props.newPostText}
                                addPost={this.props.addPost}
                                updateNewPost={this.props.updateNewPost}/>


                    </div>

                </div>
            </div>
        )
    }


}

export default Profile