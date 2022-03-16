import {v1} from "uuid";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT ="UPDATE-NEW-MESSAGE-TEXT"

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
    newMessageText: string
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    _rerenderEntireThree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

// STORE
export const store: StoreType = {
    _state: {
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
            ],
            newMessageText: 'Напишите сообщение'
        },
        sidebar: {}
    },
    _rerenderEntireThree() {
    },
    getState() {
        return this._state;
    },
    // функция отрисовки
    subscribe(observer) {
        this._rerenderEntireThree = observer
    },
    dispatch(action) {
        //функция добавить пост
        if (action.type === ADD_POST) {
            const newPost = {id: v1(), message: action.newPostText, likesCount: 0}
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireThree()
            //функция обновляет запись в посте через стэйт
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireThree()
            //функция добавить сообщение
        } else if (action.type === ADD_MESSAGE) {
            const newMessage = {id: v1(), message: action.newMessageText}
            this._state.dialogsPage.messages.unshift(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._rerenderEntireThree()
            //функция обновляет запись в сообщении через стэйт
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newTextMessage
            this._rerenderEntireThree()
        }
    }
}
export const addPostAC = (newPostText:string) => {
    return {type: ADD_POST, newPostText: newPostText} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text} as const
}
export const addMessageAC = (newMessageText:string) => {
    return {type: ADD_MESSAGE, newMessageText: newMessageText} as const
}
export const updateNewMessageTextAC = (newTextMessage: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: newTextMessage} as const
}
