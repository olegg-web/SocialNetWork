import React from 'react'
import classes from './Friends.module.css'
import MyFriend from "./MyFriend/MyFriend";

const Friends = (props) => {
    let elementFriend = props.friends.map((el, index) =>
        <MyFriend name={el.name} surname={el.surname} ava={el.ava} statusUser={el.statusUser} key={index}/>)
    return (
        <div>
            <div className={classes.friends}>
                <div className={classes.friends_block_left}>
                    <div className={classes.friends_block_left_input}><input type="text" defaultValue='Поиск друзей'/>
                    </div>
                    {elementFriend}
                </div>
                <div className={classes.friends_block_right}></div>
            </div>
        </div>
    )
}
export default Friends