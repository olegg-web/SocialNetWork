import React from "react";
import {renderEntire} from "../Render";

let state = {
    text: 'group',
    navLink: [
        {id: 1, headline: 'Моя страница', link: "/profile"},
        {id: 2, headline: 'Друзья', link: "/friends"},
        {id: 3, headline: 'Сообщения', link: "/message"},
        {id: 4, headline: 'Музыка', link: "/music"},
        {id: 5, headline: 'Фотографии', link: "/photo"},
        {id: 6, headline: 'Видео', link: "/video"},
        {id: 7, headline: 'Новости', link: "/news"},
        {id: 8, headline: 'Группы', link: "/group"},

    ],

    user: {
        avatar: "https://sun9-29.userapi.com/vDtV-Kd1TB6LMBwkkHjkVuVkQ2CmFi8BMbr_UA/z3wSppTmt6U.jpg",
        info: {
            name: 'Олег',
            surname: 'Гуляев',
            date: '1991-06-23',
            country: 'Россия',
            city: 'Нижний Новгород',
            study:'Вычислительные машины, комплексы, системы и сети',
            work:'ННИИРТ',
            hobbies:'футбол, волейбол, лёгкая атлетика, тяжёлая атлетика, музыка, программирование',
            education:null
        }

    },
    post:{
        postData: [
            {
                id: 4,
                message: 'Привет! Если у тебя хорошее настроение, то ставь лайк!',
                likesCount: 2,
                img: 'https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg',
                userNameInComments: "Иван Царевич",
            },
            {
                id: 3,
                message: 'го дружить!',
                likesCount: 12,
                img: 'https://i.pinimg.com/originals/76/6c/f7/766cf770ea8dd3529bd8e0c41d6784be.jpg',
                userNameInComments:"Александр Бородач",
            },
            {
                id: 2,
                message: 'Не лает, не кусает, а в дом не пускает, кто это?',
                likesCount: 32,
                img: 'https://www.sunhome.ru/i/wallpapers/61/pozitivnie-kartinki.orig.jpg',
                userNameInComments:"Артём Дзюба",
            },
            {
                id: 1,
                message: 'Не могу представить себе событие в мире, после которого не упал бы курс рубля.',
                likesCount: 68,
                img: 'https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg',
                userNameInComments:"Илья Муромец",
            },
        ],
        newPostText: 'Введите текст...'

    }
}
 export let addPost = (postMessage)=>{
    let newPost ={
        id:5,
        message:postMessage,
        likesCount:0,
        img:state.user.avatar,
        userNameInComments:state.user.info.name +' '+ state.user.info.surname,
    }
    state.post.postData.unshift(newPost);
     renderEntire(state);
}


export default state