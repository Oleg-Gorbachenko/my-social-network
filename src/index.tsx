import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";


export const rerenderEntireThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree();

store.subscribe(() => {
    rerenderEntireThree()
})

reportWebVitals();
rerenderEntireThree()