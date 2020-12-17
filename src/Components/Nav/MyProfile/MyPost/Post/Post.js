import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {

    return (
        <div className={classes.post_block}>
            <div className={classes.post_block_wrap}>
                <div className={classes.post_block_wrap_avatar}><img src={props.img} alt=""/></div>
                <div className={classes.post_block_wrap_avatar_comments}>{props.nameInComments}</div>
            </div>
            <div className={classes.post_block_text}>{props.message}</div>
            <div className={classes.post_block_text_countLikes}>
                <div className={classes.post_block_text_countLikes_like}/>
                <div className={classes.post_block_text_countLikes_count}>{props.likesCount}</div>
            </div>
        </div>
    )
}
export default Post