import {v1} from "uuid";
import {ActionsTypes} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotosType
}

export type ProfileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type ProfilePhotosType = {
    small: string
    large: string
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}


const initialState = {
    posts: [
        {id: v1(), message: 'How are you!', likesCount: 15},
        {id: v1(), message: 'It\'s my first post', likesCount: 26}
    ] as Array<PostType>,
    newPostText: '',
    profile: null
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    //функция добавить пост
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [{id: v1(), message: state.newPostText, likesCount: 0},
                    ...state.posts],
                newPostText: ''
            }
        }
        //функция обновляет запись в посте через стэйт
        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}

export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)

export default profileReducer