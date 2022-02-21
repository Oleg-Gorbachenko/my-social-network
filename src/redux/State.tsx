import React from "react";
import {v1} from "uuid";

let rerenderEntireThree = (state:RootStateType) => {

}

// типизация
export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    name: string
    id: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
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

// хранение данных в State
export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'How are you!', likesCount: 15},
            {id: v1(), message: 'It\'s my first post', likesCount: 26}
        ],
        newPostText: 'Написать пост'
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Oleg'},
            {id: v1(), name: 'Maks'},
            {id: v1(), name: 'Anton'},
            {id: v1(), name: 'Viktoriya'},
            {id: v1(), name: 'Dmitry'}
        ],
        messages: [
            {id: v1(), message: 'Hi!'},
            {id: v1(), message: 'How are you!'},
            {id: v1(), message: 'Yo!'},
            {id: v1(), message: 'I`m fine!'}
        ]
    },
    sidebar: {}
}

// функции
export const addPost = () => { //функция добавить пост
    let newPost = {id: v1(), message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireThree(state)
}

export const addMessage = (title: string) => { //функция добавить сообщение
    let newMessage = {id: v1(), message: title}
    state.dialogsPage.messages.unshift(newMessage)
    rerenderEntireThree(state)
}

export const updateNewPostText = (newText: string) => { //функция обновляет запись в посте через стэйт
    state.profilePage.newPostText = newText
    rerenderEntireThree(state)
}

export const subscribe = (observer:(state:RootStateType)=>void) => {
    rerenderEntireThree = observer
}