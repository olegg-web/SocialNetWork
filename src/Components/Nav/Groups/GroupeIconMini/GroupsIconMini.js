import React from 'react'
import classes from './GroupsIconMini.module.css'

const GroupsIconMini = (props) => {
    return (

        <div className={classes.blockGroupMini}>
            <div className={classes.ava_group}>
                <a href=""><img src={props.ava} alt=""/></a>

            </div>
            <div className={classes.blockMiniTwo}>
                <div className={classes.name_group}>{props.name}</div>
                <div className={classes.category_group}>{props.category}</div>
            </div>


        </div>
    )
}
export default GroupsIconMini