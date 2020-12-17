import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state from './State/State'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost,updateNewPost,subscribe} from "./State/State";


let renderEntire=(state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();
}

renderEntire(state);
subscribe(renderEntire)



