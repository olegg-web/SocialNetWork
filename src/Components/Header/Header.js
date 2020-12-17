import React from 'react'
import classes from './Header.module.css'
import Clock from './Clock/Clock'

const Header = () => {
    return (

            <div className={classes.header}>
                <div className={classes.header_fixed}>
                <div className={classes.header_page_inner}>
                    <div className={classes.header_page_inner_logo}>
                        <a href="/profile"><img src="img/message.png" alt="logo"/></a>

                    </div>
                    <div className={classes.clock}>
                        <Clock/>
                    </div>

                </div>
            </div>
        </div>

    )


}
export default Header