import {v1} from "uuid";
import {ActionsTypes, DialogsPageType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const initialState = {
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
    newMessageText: ''
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
    //функция добавить сообщение
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {id: v1(), message: action.newMessageText}
            state.messages.unshift(newMessage)
            state.newMessageText = ''
            return state
        //функция обновляет запись в сообщении через стэйт
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newTextMessage
            return state
        default:
            return state
    }
}

export const addMessageAC = (newMessageText: string) => {
    return {
        type: ADD_MESSAGE,
        newMessageText: newMessageText
    } as const
}
export const updateNewMessageTextAC = (newTextMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newTextMessage: newTextMessage
    } as const
}

export default dialogsReducer