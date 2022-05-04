import {v1} from "uuid";
import {ActionsTypes, ThunkDispatchType, ThunkType} from "./store";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

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
    status: string
}


const initialState = {
    posts: [
        {id: v1(), message: 'How are you!', likesCount: 15},
        {id: v1(), message: 'It\'s my first post', likesCount: 26}
    ] as Array<PostType>,
    newPostText: '',
    profile: null,
    status: '',
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
        case SET_STATUS: {
            return {...state, status: action.status}
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

export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

export const getUsersProfile = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getStatus = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus = (status: string): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer