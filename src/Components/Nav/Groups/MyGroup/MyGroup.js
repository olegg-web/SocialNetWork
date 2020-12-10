import React from 'react'
import classes from './MyGroup.module.css'

const MyGroup = (props) => {

    return (
        <div className={classes.every_group}>
            <div className={classes.photo_group}>
                <a href=""><img src={props.ava}  alt=""/></a>

            </div>
            <div>
                <div className={classes.name_group}>{props.name}</div>
                <div className={classes.category_group}>{props.category}</div>
                <div className={classes.number_group}>{props.number}</div>
            </div>



        </div>
    )
}
export default MyGroup