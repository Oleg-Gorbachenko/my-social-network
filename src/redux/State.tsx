import React from "react";

// типизация
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
    addPost?: (postMessage: string) => void
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type StateType = {
    state: RootStateType
    addPost?: (postMessage: string) => void
}

// хранение данных в State
export let state = {
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


// функции
export let addPost = (postMessage: string) => { //функция добавить пост
    debugger
    let newPost = {
        id: 5,
        message: (postMessage),
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
}