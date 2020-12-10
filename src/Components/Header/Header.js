import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return (

            <div className={classes.header}>
                <div className={classes.fixed}>
                <div className={classes.page_Header_inner}>
                    <div className={classes.page_Header_inner_logo}>
                        <img src="img/iconfinder-vk.png" alt="logo"/>
                    </div>

                </div>
            </div>
        </div>

    )


}
export default Header