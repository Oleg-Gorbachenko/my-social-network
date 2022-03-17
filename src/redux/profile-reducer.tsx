import {v1} from "uuid";
import {ActionsTypes, ProfilePageType} from "./State";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state:ProfilePageType, action:ActionsTypes) => {
    //функция добавить пост
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: v1(), message: action.newPostText, likesCount: 0}
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        //функция обновляет запись в посте через стэйт
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export const addPostAC = (newPostText: string) => {
    return {type: ADD_POST, newPostText: newPostText} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text} as const
}

export default profileReducer