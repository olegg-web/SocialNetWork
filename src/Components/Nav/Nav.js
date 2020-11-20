import React from 'react'
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";


const Nav=(props)=>{
    let navLinkElement = props.navLink.map((el,index)=>
        <li key={index}><NavLink to={el.link}>{el.headline}</NavLink></li>
    )
    return(
        <div className={classes.nav_grid}>
            <div className={classes.nav_wrap_list}>
                <ul>
                    {navLinkElement}
                </ul>
            </div>

        </div>
    )
}
export  default Nav
