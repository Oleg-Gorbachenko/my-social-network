import {v1} from "uuid";
import {ActionsTypes} from "./store";

const ADD_MESSAGE = "dialogs/ADD-MESSAGE"

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
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return state = {
                ...state,
                messages: [...state.messages,{id: v1(), message: action.newMessageText}]
            }
        }
        default:
            return state
    }
}

//action creator
export const addMessage = (newMessageText:string) => ({type: ADD_MESSAGE,newMessageText} as const)