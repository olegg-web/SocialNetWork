import React from 'react'
import classes from './Profile.module.css'
import MyPost from '../MyProfile/MyPost/MyPost'
import OtherInfo from  './OtherInfo/OtherInfo'
import FriendsMini from "./ProfilInfo/FriendsMini/FriendsMini";


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textStart: 'Показать подробная информация',
            show:false,
            showBlock:null,
        }
    }

        render(){
            const countDate = () => {
               return ((new Date().getTime() - new Date(this.props.userInfo.info.date)) / (24 * 3600 * 365.25 * 1000)) | 0

            }
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
             }

            const normText = () => {
                let text = this.props.userInfo.info.date;
                console.log(text)
                return text.replace(/-/g, '.')
            }
            const enlargeBlock = () => {

                if(this.state.textStart === 'Показать подробная информация'){
                    this.setState({textStart:'Скрыть подробную информацию',showBlock:
                            <OtherInfo
                            study={this.props.userInfo.info.study}
                            work={this.props.userInfo.info.work}
                            hobbies={this.props.userInfo.info.hobbies}
                            education={this.props.userInfo.info.education}/>
                    })
                }else if(this.state.textStart ==='Скрыть подробную информацию'){
                    this.setState({textStart:'Показать подробная информация',showBlock:null})

                }
            }
            let elementFriendMini = this.props.friends.map((el,index)=>
                <FriendsMini name={el.name} surname={el.surname} ava={el.ava} statusUser={el.statusUser} key={index} />)

           let numFriends = this.props.friends.length

            let numOnline = this.props.friends.filter(item=>{
                if(item.statusUser){
                     return true
                 }

            })
                     return (
                <div className={classes.profile_flex}>

                    <div className={classes.left}>
                        <div className={classes.profile_ava}>
                            <div className={classes.ava_user}>
                                <img src={this.props.userInfo.avatar} alt="avatar"/>
                                {/*{console.log(this.props.userInfo)}*/}
                            </div>
                            <div className={classes.ava_button}>редактировать</div>
                        </div>

                        <div className={classes.profile_friends} >
                            <div className={classes.info_friends}>Друзья <span className={classes.numFriends}>{numFriends}</span> </div>

                            <div className={classes.profile_friends_mini}>{elementFriendMini}</div>

                        </div>
                        <div className={classes.profile_friends_num_online}>
                            <div className={classes.profile_friends_num_online_text}>Друзья онлайн {numOnline.length}</div>
                            <div className={classes.profile_friends_num_online_icon}>ыавыаыва</div>
                        </div>
                        <div className={classes.profile_subscriptions}>subscriptions</div>
                        <div className={classes.profile_album}>album</div>
                        <div className={classes.profile_videos}>videos</div>

                    </div>

                    <div className={classes.rigth}>
                        <div className={classes.profile_info}>

                            <div
                                className={classes.nameUserName}>{this.props.userInfo.info.name} {this.props.userInfo.info.surname}</div>
                            <input type="text" className={classes.status} defaultValue='изменить статус'/>
                            <hr className={classes.hr}/>
                            <div className={classes.aligndate}>
                                <div className={classes.date}> Дата рождения:</div>
                                <div className={classes.dateAge}>{normText()}
                                     <span
                                    className={classes.age_block}>{`${countDate()} ${age()}`}</span></div>
                            </div>


                            <div className={classes.aligncountry}>
                                <div className={classes.country}>Страна:</div>
                                <div className={classes.mycountry}>{this.props.userInfo.info.country}</div>
                            </div>

                            <div className={classes.aligncity}>
                                <div className={classes.city}>Город:</div>
                                <div className={classes.mycity}>{this.props.userInfo.info.city}</div>
                            </div>

                            <div className={classes.arrowDown} onClick={enlargeBlock}>{this.state.textStart}</div>

                        </div>
                        <div>{this.state.showBlock}</div>




                        <div className={classes.profile_content}>

                            <MyPost inpValue={this.props.postState.newPostText}
                                    comments={this.props.postState.postData}
                                    addPost={this.props.addPost}
                            />


                            {/*<div className={classes.posts}>*/}
                            {/*</div>*/}

                        </div>

                    </div>
                </div>
            )
        }



}
export default Profile