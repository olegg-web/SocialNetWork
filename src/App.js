import React from 'react'
import classes from './App.module.css';
import Header from "./Components/Header/Header";
import RSideBar from "./Components/RSideBar/RSideBar";
import Nav from "./Components/Nav/Nav";
import Photo from './Components/Nav/Photo/Photo'
import Message from './Components/Nav/Message/Message'
import Profile from "./Components/Nav/MyProfile/Profile";
import Music from "./Components/Nav/MyMusic/Music";
import Video from "./Components/Nav/MyVideos/Video";
import Friends from "./Components/Nav/MyFriends/Friends";
import Groups from "./Components/Nav/Groups/Groups";
import News from "./Components/Nav/News/News";


import {BrowserRouter,Route} from "react-router-dom";

function App(props) {

    return (
        <BrowserRouter>
        <div className={classes.App}>

            <div className={classes.grid}>
                <Header/>
                <Nav navLink={props.state.navLink}/>
                <div className={classes.mainBlock_route}>
                    <div className={classes.main_wrap_list}>
                        <Route path='/profile' render = {()=><Profile userInfo={props.state.user}
                                                                      postState={props.state.post}
                                                                      addPost={props.addPost}
                                                                      addLike={props.addLike}/>}/>
                        <Route path='/friends' render = {()=><Friends />}/>
                        <Route path='/message' render = {()=><Message />}/>
                        <Route path='/music' render = {()=><Music />}/>
                        <Route path='/photo' render = {()=><Photo />}/>
                        <Route path='/video' render = {()=><Video />}/>
                        <Route path='/news' render = {()=><News />}/>
                        <Route path='/group' render = {()=><Groups text={props.state.text}/>}/>
                        {/*<Route path='/group' component = {Groups}/>*/}

                    </div>
                </div>
                {/*<RSideBar/>*/}
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
