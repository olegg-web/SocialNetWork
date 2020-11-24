import React from "react";

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
            city: 'Нижний Новгород'
        }

    },
    post:{
        postData: [
            {
                id: 1,
                message: 'Hi,how are you?',
                likeCount: 2,
                img: 'https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg',
                userNameInComments: "Иван Царевич",
            },
            {
                id: 2,
                message: 'Its my first post',
                likeCount: 12,
                img: 'https://i.pinimg.com/originals/76/6c/f7/766cf770ea8dd3529bd8e0c41d6784be.jpg',
                userNameInComments:"Александр Бородач",
            },
            {
                id: 3,
                message: 'Hello world',
                likeCount: 32,
                img: 'https://www.sunhome.ru/i/wallpapers/61/pozitivnie-kartinki.orig.jpg',
                userNameInComments:"Артём Дзюба",
            },
            {
                id: 4,
                message: 'What is you name?',
                likeCount: 68,
                img: 'https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg',
                userNameInComments:"Илья Муромец",
            },
        ],
        newPostText: 'Введите текст...'

    }
}

export default state