import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from './State/State'
import {addPost} from "./State/State";
// import {addLike} from "./State/State";


export let renderEntire=(state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();
}