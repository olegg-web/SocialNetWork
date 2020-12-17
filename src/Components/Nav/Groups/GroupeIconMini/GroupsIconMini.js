import React from 'react'
import classes from './GroupsIconMini.module.css'

const GroupsIconMini = (props) => {
    return (

        <div className={classes.blockGroupMini}>
            <div className={classes.group_avatar}>
                <a href=""><img src={props.ava} alt=""/></a>

            </div>
            <div className={classes.blockMiniTwo}>
                <div className={classes.group_name}>{props.name}</div>
                <div className={classes.group_category}>{props.category}</div>
            </div>


        </div>
    )
}
export default GroupsIconMini