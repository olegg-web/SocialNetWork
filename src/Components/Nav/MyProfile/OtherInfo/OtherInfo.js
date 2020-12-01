import React from 'react'
import classes from './OtherInfo.module.css'


const OtherInfo = (props) => {
    let educationInfo =()=>{
        if(props.education === null){
            return 'Информация отсутствует'
        }
    }
    return (
        <div className={classes.info}>
            <div className={classes.wrap_info_education}>
                <div className={classes.info_education}>Образование: </div>
                <div className={classes.div_info_education}>{educationInfo()}</div>
            </div>
            <div className={classes.wrap_info_study}>
                <div className={classes.info_study}>Специальность: </div>
                <div className={classes.div_info_study}>{props.study}</div>
            </div>
            <div className={classes.wrap_info_work}>
                <div className={classes.info_work}>Место работы: </div>
                <div className={classes.div_info_work}>{props.work}</div>
            </div>
            <div className={classes.wrap_info_hobbies}>
                <div className={classes.info_hobbies}>Увлечения:</div>
                <div className={classes.div_info_hobbies}>{props.hobbies}</div>
            </div>

        </div>
    )
}
export default OtherInfo