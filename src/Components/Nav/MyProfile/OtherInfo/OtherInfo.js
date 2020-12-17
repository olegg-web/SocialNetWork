import React from 'react'
import classes from './OtherInfo.module.css'


const OtherInfo = (props) => {
    let educationInfo = () => {
        if (props.education === null) {
            return 'Информация отсутствует'
        }
    }
    return (
        <div className={classes.info}>
            <div className={classes.info_block}>
                <div className={classes.info_person}>Образование:</div>
                <div className={classes.info_wrap}>{educationInfo()}</div>
            </div>
            <div className={classes.info_block}>
                <div className={classes.info_person}>Специальность:</div>
                <div className={classes.info_wrap}>{props.study}</div>
            </div>
            <div className={classes.info_block}>
                <div className={classes.info_person}>Место работы:</div>
                <div className={classes.info_wrap}>{props.work}</div>
            </div>
            <div className={classes.info_block_hobbies}>
                <div className={classes.info_person}>Увлечения:</div>
                <div className={classes.info_wrap}>{props.hobbies}</div>
            </div>

        </div>
    )
}
export default OtherInfo