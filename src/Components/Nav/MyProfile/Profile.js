import React from 'react'
import classes from './Profile.module.css'
import MyPost from '../MyProfile/MyPost/MyPost'
import OtherInfo from  './OtherInfo/OtherInfo'
import FriendsMini from "../MyFriends/FriendsMini/FriendsMini";
import FriendsMiniOnline from "../MyFriends/FriendsMiniOnline/FriendsMiniOnline"
import GroupsIconMini from "../Groups/GroupeIconMini/GroupsIconMini";


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
            }//высчитать количество лет


{console.log(this.props.newPostText)}
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
                let arrMount = ["января","февраля","марта","апрель","май","июня","июля","августа","сентября","октября","ноября","декабря"]
                let text = this.props.userInfo.info.date;
                let res = text.split('-')
                let  num0 = res[0],num1 = res[1],num2=res[2];
                let numOne = num1.slice(1,2)
                return num2+' '+arrMount[numOne]+' '+num0

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
            let arr = this.props.friends;


            // function shuffle(arr){
            //     let j, temp;
            //     for(let i = arr.length - 1; i > 0; i--){
            //         j = Math.floor(Math.random()*(i + 1));
            //         temp = arr[j];
            //         arr[j] = arr[i];
            //         arr[i] = temp;
            //     }
            //     return arr;
            // }
            // shuffle(arr)
            let mini= arr.slice(0,6)

            const elementFriendMini = mini.map((el,index)=>
                <FriendsMini name={el.name} ava={el.ava} key={index} />)

           const numFriends = this.props.friends.length

            const numOnline = this.props.friends.filter(item=>{
                if(item.statusUser){
                    return true
                }
            })

            const miniOnline= numOnline.slice(0,6)

            const elementFriendsMiniOnline = miniOnline.map((el,index)=>
                <FriendsMiniOnline name={el.name} ava={el.ava} key={index}/> )

            const arrForBlock=[]
                numOnline.length !== 0? arrForBlock.push(classes.profile_friends_mini):arrForBlock.push()

            const groups = this.props.groups
            const groupsSlice = groups.slice(0,5)

            const elementGroupMini = groupsSlice.map((el,index)=>
                <GroupsIconMini name={el.name} ava={el.ava} category={el.category} key={index}/>)


                     return (

                <div className={classes.profile_flex}>
                    <div className={classes.left}>
                        <div className={classes.profile_ava}>
                            <div className={classes.ava_user}>
                                <img src={this.props.userInfo.avatar} alt="avatar"/>
                            </div>
                            <div className={classes.ava_button}>редактировать</div>
                        </div>

                        <div className={classes.profile_friends} >
                            <div className={classes.info_friends}>Друзья
                                <span className={classes.numFriends}>{numFriends}</span>
                            </div>
                            <div className={classes.profile_friends_mini}>{elementFriendMini}</div>

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
                                    newPostText={this.props.newPostText}
                                    addPost={this.props.addPost}
                                    updateNewPost={this.props.updateNewPost}/>


                            {/*<div className={classes.posts}>*/}
                            {/*</div>*/}

                        </div>

                    </div>
                </div>
            )
        }



}
export default Profile