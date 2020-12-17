import React from 'react'
import classes from './MyFriend.module.css'

const MyFriend = (props) => {
    const addStatus = () => {
        if (props.statusUser) {
            return 'Онлайн'
        }
    }
    return (
        <div className={classes.every_friend_block}>
            <div className={classes.every_friend_block_photo}>
                <a href=""><img
                    src={props.ava}
                    alt=""/>
                </a>
            </div>
            <div className={classes.every_friend_block_name}>
                {props.name} {props.surname}
            </div>
            <div className={classes.every_friend_block_name_status}>
                {addStatus()}
            </div>
        </div>
    )
}
export default MyFriend