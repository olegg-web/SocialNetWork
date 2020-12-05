import React from 'react'
import classes from './FriendsMini.module.css'

const FriendsMini =(props)=>{
    return(
        <div className={classes.friends_block_mini}>
            <div className={classes.img_mini}><img src={props.ava} alt=""/> </div>
            <div className={classes.frirnds_name}>{props.name}</div>



        </div>
    )
}
export default FriendsMini