import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {Provider} from "./StoreContext";
import {RootStateType} from "./redux/store";
import store from "./redux/redux-store"


export const rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireThree(state)
})

reportWebVitals();