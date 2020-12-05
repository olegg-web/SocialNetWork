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
        },
        friends:[
            {id:1,name:'Иван',surname:'Петров',ava:"https://sun9-35.userapi.com/impf/c841231/v841231673/522b/E-GO8vJXrIQ.jpg?size=608x1080&quality=96&sign=fdd59f7215a55e15d9bfa2d90ea91afc",statusUser:false},
            {id:2,name:'Александр',surname:'Рыбаков',ava:"https://sun9-54.userapi.com/impg/NKCgRaVmacyi2PRN5I-EiXorKVgaAR8G_tQikw/jcW15B6bp7g.jpg?size=812x1080&quality=96&sign=41c83c255cd99092fa1db3ed9da45e03",statusUser:true},
            {id:3,name:'Дмитрий',surname:'Медведев',ava:" https://sun9-31.userapi.com/impg/c855016/v855016606/1ed36c/6wg36SbAzFE.jpg?size=200x0&quality=96&crop=0,560,1439,1439&sign=76f9456c0d85cbab2feb099cdb60b666&ava=1",statusUser:false},
            {id:4,name:'Николай',surname:'Сидоров',ava:"https://sun9-17.userapi.com/impf/c840425/v840425119/7e299/p2jPjmr4hbg.jpg?size=200x0&quality=96&crop=0,248,640,640&sign=8b32bfa9b690914a17f525d3e6605485&ava=1",statusUser:true},
            {id:5,name:'Алексей',surname:'Щербаков',ava:"https://sun9-48.userapi.com/impf/g5YVPMrFB9y5F5mnhb3hih9qlre82C0qqna_lw/808V1-SyNH8.jpg?size=1280x1219&quality=96&sign=464517088e1eb1045904effba1ef192b",statusUser:false},
            {id:6,name:'Владимир',surname:'Путин',ava:"https://sun9-58.userapi.com/impf/c851336/v851336481/1fcd72/hTJvN487m8M.jpg?size=200x0&quality=96&crop=12,12,1420,1420&sign=7d1ea1a6e4ce03a8bca650ecf41c23d3&ava=1",statusUser:false},
            {id:7,name:'Александр',surname:'Иванов',ava:"https://sun9-46.userapi.com/impf/c837521/v837521571/3adbd/9zd9PVYOaak.jpg?size=200x0&quality=96&crop=0,107,592,592&sign=5b79277f11ae59dfc57c5ead8e972205&ava=1",statusUser:true},
            {id:8,name:'Артём',surname:'Дзюба',ava:"https://sun9-58.userapi.com/impg/sZl0hCPA7sXYBUHPQY8M1_zOy0zAY62qa5JVHQ/MRbl-mfRNO8.jpg?size=200x0&quality=96&crop=4,4,844,844&sign=b101a4b45334c40b1a41efed3388dec0&ava=1",statusUser:false},
            {id:9,name:'Света',surname:'Волкова',ava:"https://sun9-69.userapi.com/impf/c848736/v848736892/88c00/j-XAln0gnSw.jpg?size=200x0&quality=96&crop=0,216,1727,1727&sign=f3ce11a81ff8794b49c2aba8f37dfc13&ava=1",statusUser:false},
            {id:10,name:'Олег',surname:'Майами',ava:"https://sun9-50.userapi.com/impf/c851224/v851224281/12f78b/EUdXXwZh648.jpg?size=200x0&quality=96&crop=518,0,1440,1440&sign=b02500ccb77ecc1f21fb5660f0c066a7&ava=1",statusUser:true},
            {id:11,name:'Илья',surname:'Кузнецов',ava:"https://sun9-59.userapi.com/impf/c844216/v844216666/cf3ee/2F0safb-1g4.jpg?size=200x0&quality=96&crop=0,200,1296,1924&sign=7591b5c16dfe338c082becad103d071a&ava=1",statusUser:true},
            {id:12,name:'Иван',surname:'Дрозов',ava:"https://sun9-57.userapi.com/impf/c849520/v849520466/21759/2uYbSEYAEWU.jpg?size=200x0&quality=96&crop=104,134,431,431&sign=db27a4764893606a693e4ba87276f770&ava=1",statusUser:false},
            {id:13,name:'Александр',surname:'Петраков',ava:"https://sun9-11.userapi.com/impf/c637619/v637619731/3c267/bLIupdxhvL4.jpg?size=200x0&quality=96&crop=0,0,1080,1920&sign=30bf9c662f1a32873ffe4332341d030a&ava=1",statusUser:true},
            {id:14,name:'Иван',surname:'Дорн',ava:"https://sun9-66.userapi.com/impf/B4dGGfwPO3MOBpUciX79eWY4NWKp9mIuOgMFNg/iosfQnkJxG4.jpg?size=200x0&quality=96&crop=398,80,1755,1755&sign=b070e92addf4d8d4cf7c9754731ea48b&ava=1",statusUser:true},
            {id:15,name:'Алексей',surname:'Светлаков',ava:"https://sun9-22.userapi.com/impf/c627720/v627720331/2816c/KH6sp5oBIIw.jpg?size=200x0&quality=96&crop=0,0,1080,1350&sign=960c49414d69d7685706d20df3873b04&ava=1",statusUser:false}

        ]



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