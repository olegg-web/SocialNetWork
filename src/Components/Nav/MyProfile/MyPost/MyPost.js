import React from 'react'
import Post from './Post/Post'
import classes from './MyPost.module.css'
import 'typeface-roboto'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';


const MyPost = (props) => {
    let postElements = props.comments.map((el, index) =>
        <Post message={el.message} likesCount={el.likesCount} img={el.img} nameInComments={el.userNameInComments}
              key={index}/>
    )
    let newAddPost = React.createRef()

    const addPost = () => {
        props.addPost()
        props.updateNewPost('')
        // newAddPost.current.value = '';
    }

    let onPostChange = () => {
        let text = newAddPost.current.value
        props.updateNewPost(text)
    }

    let clickOnText = () => {
        props.updateNewPost('')
    }

    return (
        <div>
            <div><textarea name="textArea" id="ta" cols="60" rows="2"
                           ref={newAddPost} onChange={onPostChange}
                           value={props.newPostText}
                           onClick={clickOnText}
            />
            </div>




            <button className={classes.myButton} onClick={addPost}>Добавить</button>
            <div className={classes.text}>Все записи</div>
            <hr className={classes.hr}/>
            {postElements}
        </div>
    )
}
export default MyPost