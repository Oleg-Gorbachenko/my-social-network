import {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import {addMessageAC, updateNewMessageTextAC} from "./dialogs-reducer";

// типизация
// type MessageType = {
//     id: string
//     message: string
// }
// type DialogType = {
//     name: string
//     id: string
// }
// type PostType = {
//     id: string
//     message: string
//     likesCount: number
// }
// type ProfilePageType = {
//     posts: Array<PostType>
//     newPostText: string
// }
// type DialogsPageType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//     newMessageText: string
// }
// type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     // sidebar: SidebarType
// }
//  type StoreType = {
//     _state: RootStateType
//     _rerenderEntireThree: (state: RootStateType) => void
//     subscribe: (observer: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsTypes) => void
// }
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

// STORE
// const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: v1(), message: 'How are you!', likesCount: 15},
//                 {id: v1(), message: 'It\'s my first post', likesCount: 26}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: v1(), name: 'Andrey'},
//                 {id: v1(), name: 'Oleg'},
//                 {id: v1(), name: 'Maks'},
//                 {id: v1(), name: 'Anton'},
//                 {id: v1(), name: 'Viktoriya'},
//                 {id: v1(), name: 'Dmitry'}
//             ],
//             messages: [
//                 {id: v1(), message: 'Hi!'},
//                 {id: v1(), message: 'How are you!'},
//                 {id: v1(), message: 'Yo!'},
//                 {id: v1(), message: 'I`m fine!'}
//             ],
//             newMessageText: ''
//         }
//     },
//     _rerenderEntireThree() {
//     },
//     // функция отрисовки
//     subscribe(observer) {
//         this._rerenderEntireThree = observer
//     },
//     getState() {
//         return this._state;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._rerenderEntireThree(this.getState())
//     }
// }
//
