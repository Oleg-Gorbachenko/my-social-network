import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    name: string
    id: number
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}



let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'How are you!', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 26}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Oleg'},
            {id: 3, name: 'Maks'},
            {id: 4, name: 'Anton'},
            {id: 5, name: 'Viktoriya'},
            {id: 6, name: 'Dmitry'}
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you!'},
            {id: 3, message: 'Yo!'},
            {id: 4, message: 'Abrakadabra'}
        ]
    },
    sidebar: {}
}


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
