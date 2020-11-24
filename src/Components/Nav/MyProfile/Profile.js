import React from 'react'
import classes from './Profile.module.css'
import MyPost from '../MyProfile/MyPost/MyPost'
// import ProfilInfo from '../MyProfile/ProfilInfo/ProfilInfo'

const Profile = (props) => {

    const countDate = () => {
        return ((new Date().getTime() - new Date(props.userInfo.info.date)) / (24 * 3600 * 365.25 * 1000)) | 0

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
        let text = props.userInfo.info.date;
        return text.replace(/-/g, '.')
    }
    return (
        <div className={classes.profile_flex}>

            <div className={classes.left}>
                <div className={classes.profile_ava}>
                    <div className={classes.ava_user}>
                        <img src={props.userInfo.avatar} alt="avatar"/>
                        {/*{console.log(props.userInfo)}*/}
                    </div>
                    <div className={classes.ava_button}>редактировать</div>
                </div>

                <div className={classes.profile_friends}>friends</div>
                <div className={classes.profile_subscriptions}>subscriptions</div>
                <div className={classes.profile_album}>album</div>
                <div className={classes.profile_videos}>videos</div>

            </div>

            <div className={classes.rigth}>
                <div className={classes.profile_info}>

                    <div className={classes.nameUserName}>{props.userInfo.info.name} {props.userInfo.info.surname}</div>
                    <input type="text" className={classes.status} defaultValue='изменить статус'/>
                    <hr className={classes.a}/>
                    <div className={classes.aligndate}>
                        <div className={classes.date}> Дата рождения:</div>
                        <div className={classes.dateAge}>{normText()} <span
                            className={classes.age_block}>{countDate()} {age()}</span></div>
                    </div>


                    <div className={classes.aligncountry}>
                        <div className={classes.country}>Страна:</div>
                        <div className={classes.mycountry}>{props.userInfo.info.country}</div>
                    </div>

                    <div className={classes.aligncity}>
                        <div className={classes.city}>Город:</div>
                        <div className={classes.mycity}>{props.userInfo.info.city}</div>
                    </div>


                </div>

                <div className={classes.profile_content}>

                    <MyPost inpValue={props.postState.newPostText}
                            comments={props.postState.postData}/>


                    {/*<div className={classes.posts}>*/}
                    {/*</div>*/}

                </div>

            </div>
        </div>
    )
}
export default Profile