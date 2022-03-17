import {App} from "./App";
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/store";


export const rerenderEntireThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reportWebVitals();
