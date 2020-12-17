import React from 'react'
import classes from './Groups.module.css'
import MyGroup from '../Groups/MyGroup/MyGroup'

const Groups = (props) => {
    const elementGroup = props.groups.map((el, index) =>
        <MyGroup name={el.name} avatarGroup={el.ava} category={el.category} number={el.num} key={index}/>)

    return (

        <div className={classes.groups}>

            <div>
                <div className={classes.group_search}><input type="text" defaultValue='Поиск сообществ'/></div>
                {elementGroup}
            </div>

        </div>
    )
}
export default Groups