import {v1} from "uuid";


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
type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    newMessageText: string
}
type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newTextMessage: string
}
export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType

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
        if (action.type === 'ADD-POST') {
            const newPost = {id: v1(), message: action.newPostText, likesCount: 0}
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireThree()
            //функция обновляет запись в посте через стэйт
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireThree()
            //функция добавить сообщение
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage = {id: v1(), message: action.newMessageText}
            this._state.dialogsPage.messages.unshift(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._rerenderEntireThree()
            //функция обновляет запись в сообщении через стэйт
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newTextMessage
            this._rerenderEntireThree()
        }
    }
}


