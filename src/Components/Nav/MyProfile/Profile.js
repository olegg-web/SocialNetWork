import React from 'react'
import classes from './Profile.module.css'

const Profile = (props) => {

    const countDate = () => {
        return ((new Date().getTime() - new Date(props.userInfo.info.date)) / (24 * 3600 * 365.25 * 1000)) | 0

    }
    const age = () => {
        let num = countDate();
        let lastNum = num.toString().split('').pop();

        if (lastNum === '1') {
            return 'год'
        }else if(lastNum === '2' || lastNum === '3' || lastNum === '4'){
            return 'года'
        }else if(lastNum === '5' || lastNum === '6' || lastNum === '7' || lastNum === '8' || lastNum === '9' || lastNum === '0'){
            return 'лет'
        }

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
                    {/*{console.log(props.userInfo.name)}*/}


                    <div className={classes.nameUserName}>{props.userInfo.info.name} {props.userInfo.info.surname}</div>
                    <div>Дата рождения {props.userInfo.info.date} ({countDate()}) {age()}
                    </div>
                    <div>{props.userInfo.info.country}</div>
                    <div> {props.userInfo.info.city}</div>

                </div>
                <div className={classes.profile_content}>
                    новости
                </div>

            </div>
        </div>
    )
}
export default Profile