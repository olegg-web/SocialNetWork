import React from 'react'
import Post from './Post/Post'
import classes from './MyPost.module.css'

const MyPost = (props) => {
    // const onPostChange = ()=>{
    //
    // }
    // const addPost = () => {
    //     console.log('добавляйся')
    // }
    let postElements = props.comments.map((el,index)=>
        <Post message={el.message} likeCount={el.likeCount} img={el.img} nameInComments={el.userNameInComments} key={index}/>
    )
    return (
        <div>
            <div><textarea name="textArea" id="ta" cols="60" rows="2"
                           value={props.inpValue}/></div>
            <button className={classes.btn} >добавить</button>
            <div>Все записи</div>
            <hr className={classes.hr}/>
            {postElements}
        </div>
    )
}
export default MyPost