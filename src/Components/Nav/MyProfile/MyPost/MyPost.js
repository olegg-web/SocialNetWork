import React from 'react'
import Post from './Post/Post'
import classes from './MyPost.module.css'


const MyPost = (props) => {
    let postElements = props.comments.map((el,index)=>
        <Post message={el.message} likesCount={el.likesCount} img={el.img} nameInComments={el.userNameInComments} key={index}/>
    )
    let newAddPost = React.createRef()

    const addPost=()=>{
        let text = newAddPost.current.value
        props.addPost(text)
        newAddPost.current.value = '';
    }
    return (
        <div>
            <div><textarea name="textArea" id="ta" cols="60" rows="2"
                          ref={newAddPost}
            /></div>
            <button className={classes.btn} onClick={addPost}>добавить</button>
            <div>Все записи</div>
            <hr className={classes.hr}/>
            {postElements}
        </div>
    )
}
export default MyPost