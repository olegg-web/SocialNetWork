import React from 'react'
import classes from './Friends.module.css'
import MyFriend from "./MyFriend/MyFriend";

const Friends = (props) => {
   let elementFriend = props.friends.map((el,index)=>
        <MyFriend name={el.name} surname={el.surname} ava={el.ava} statusUser={el.statusUser} key={index}/>)
    return (
        <div>

            <div className={classes.friens}>

                    <div className={classes.friens_block_left_block}>
                        <div className={classes.inp}><input type="text" defaultValue='Поиск друзей'/></div>
                        {elementFriend}
                    </div>
                    <div className={classes.friens_block_rigth_block}>rigth</div>

            </div>
        </div>

    )
}
export default Friends