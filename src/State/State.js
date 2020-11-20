
import React from "react";

let state = {
    text:'group',
    navLink:[
        {id:1,headline:'Моя страница',link:"/profile"},
        {id:2,headline:'Друзья',link:"/friends"},
        {id:3,headline:'Сообщения',link:"/message"},
        {id:4,headline:'Музыка',link:"/music"},
        {id:5,headline:'Фотографии',link:"/photo"},
        {id:6,headline:'Видео',link:"/video"},
        {id:7,headline:'Новости',link:"/news"},
        {id:8,headline:'Группы',link:"/group"},

    ],

    user:{
        avatar:"https://sun9-29.userapi.com/vDtV-Kd1TB6LMBwkkHjkVuVkQ2CmFi8BMbr_UA/z3wSppTmt6U.jpg",
        info:{
            name:'Олег',
            surname:'Гуляев',
            date:'1991-6-23',
            country:'Россия',
            city:'Нижний Новгород'
        }


    }
}

export default state