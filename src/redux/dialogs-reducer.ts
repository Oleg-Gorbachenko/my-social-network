import {v1} from "uuid";
import {ActionsTypes} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}

const initialState = {
    dialogs: [
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Oleg'},
        {id: v1(), name: 'Maks'},
        {id: v1(), name: 'Anton'},
        {id: v1(), name: 'Viktoriya'},
        {id: v1(), name: 'Dmitry'}
    ] as Array<DialogType>,
    messages: [
        {id: v1(), message: 'Hi!'},
        {id: v1(), message: 'How are you!'},
        {id: v1(), message: 'Yo!'},
        {id: v1(), message: 'I`m fine!'}
    ] as Array<MessageType>,
    newMessageText: ''
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    //функция добавить сообщение
    switch (action.type) {
        case ADD_MESSAGE: {
            let text = state.newMessageText
            return state = {
                ...state,
                messages: [{id: v1(), message: text}, ...state.messages],
                newMessageText: ''
            }
        }
        //функция обновляет запись в сообщении через стэйт
        case UPDATE_NEW_MESSAGE_TEXT: {
            return state = {...state, newMessageText: action.newTextMessage}
        }
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const
}
export const updateNewMessageTextAC = (newTextMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newTextMessage: newTextMessage
    } as const
}

export default dialogsReducer