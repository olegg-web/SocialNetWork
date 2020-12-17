import React from 'react'
import classes from './FriendsMiniOnline.module.css'

const FriendsMiniOnline = (props) => {
    return (
        <div className={classes.friends_block_online}>
            <div className={classes.friends_block_online_img}><img src={props.ava} alt=""/></div>
            <div className={classes.friends_block_online_name}>{props.name}</div>
        </div>
    )
}
export default FriendsMiniOnline