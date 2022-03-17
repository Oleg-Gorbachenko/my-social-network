import {v1} from "uuid";
import {ActionsTypes, DialogsPageType} from "./State";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const dialogsReducer = (state:DialogsPageType, action:ActionsTypes) => {
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
    return {type: ADD_MESSAGE, newMessageText: newMessageText} as const
}
export const updateNewMessageTextAC = (newTextMessage: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: newTextMessage} as const
}

export default dialogsReducer