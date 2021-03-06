import React from 'react'
import classes from './FriendsMini.module.css'

const FriendsMini = (props) => {
    return (
        <div className={classes.friends_block_mini}>
            <div className={classes.img_mini}>
                <a href=""><img src={props.ava} alt=""/> </a></div>
            <div className={classes.friends_block_name}>{props.name}</div>
        </div>
    )
}
export default FriendsMini