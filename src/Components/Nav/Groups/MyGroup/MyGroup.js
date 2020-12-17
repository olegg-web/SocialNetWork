import React from 'react'
import classes from './MyGroup.module.css'

const MyGroup = (props) => {

    return (
        <div className={classes.every_group}>
            <div className={classes.every_group_photo}>
                <a href=""><img src={props.avatarGroup} alt=""/></a>
            </div>
            <div>
                <div className={classes.group_name}>{props.name}</div>
                <div className={classes.group_category}>{props.category}</div>
                <div className={classes.group_number}>{props.number}</div>
            </div>
        </div>
    )
}
export default MyGroup