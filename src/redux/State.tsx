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
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    addPost: (newPostText: string) => void
    addMessage: (title: string) => void
    updateNewPostText: (newText: string) => void
    _rerenderEntireThree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
}

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
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _rerenderEntireThree() {
    },
    //функция добавить пост
    addPost() {
        const newPost = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0}
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._rerenderEntireThree()
    },
    //функция добавить сообщение
    addMessage(title: string) {
        const newMessage = {id: v1(), message: title}
        this._state.dialogsPage.messages.unshift(newMessage)
        this._rerenderEntireThree()
    },
    //функция обновляет запись в посте через стэйт
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireThree()
    },
    // функция отрисовки
    subscribe(observer) {
        this._rerenderEntireThree = observer
    }
}


