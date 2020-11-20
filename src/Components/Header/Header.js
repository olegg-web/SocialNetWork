import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return (
        // <div className={classes.fixed}>
            <div className={classes.header}>
                <div className={classes.page_Header_inner}>
                    <div className={classes.page_Header_inner_logo}>
                        <img src="img/Spring-me-Icon48.png" alt="logo"/>
                    </div>

                </div>
            </div>
        // </div>

    )


}
export default Header