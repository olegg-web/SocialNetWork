import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from "./State/State";
import {updateNewPost} from "./State/State";


export let renderEntire=(state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();
}