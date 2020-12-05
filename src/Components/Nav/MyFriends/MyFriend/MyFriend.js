import React from 'react'
import classes from './MyFriend.module.css'

const MyFriend = (props) => {
    const addStatus=()=>{
        if(props.statusUser){
            return 'Онлайн'
        }
    }
    return (
        <div className={classes.every_friend}>
            <div className={classes.photo_friend}>
                <img
                    src={props.ava}
                    alt=""/>
            </div>
            <div className={classes.name_friend}>
                {props.name} {props.surname}
            </div>
            <div className={classes.status_friend}>
                {addStatus()}
            </div>


        </div>
    )
}
export default MyFriend