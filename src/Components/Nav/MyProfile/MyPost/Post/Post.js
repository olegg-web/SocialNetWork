import React from 'react'
import classes from './Post.module.css'

const Post =(props)=>{
    return(
        <div className={classes.post_block}>
            <div className={classes.ava_text}>
                <div className={classes.postAva}><img src={props.img} alt=""/></div>
                <div className={classes.nameInComments}>{props.nameInComments}</div>
            </div>
            <div className={classes.text}>{props.message}</div>


        </div>
    )
}
export default Post