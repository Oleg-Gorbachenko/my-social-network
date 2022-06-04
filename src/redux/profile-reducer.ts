import {v1} from "uuid";
import {ActionsTypes, ThunkDispatchType} from "./store";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "profile/ADD-POST"
const DELETE_POST = "profile/DELETE-POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"

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
    profile: ProfileType | null
    status: string
}


const initialState = {
    posts: [
        {id: v1(), message: 'How are you!', likesCount: 15},
        {id: v1(), message: 'It\'s my first post', likesCount: 26}
    ] as Array<PostType>,
    profile: null,
    status: '',
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [{id: v1(), message: action.newPostText, likesCount: 0},
                    ...state.posts]
            }
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
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

//action creators
export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const deletePost = (id: string) => ({type: DELETE_POST, id} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)

//thunks
export const getUsersProfile = (userId: string) => async (dispatch: ThunkDispatchType) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: string) => async (dispatch: ThunkDispatchType) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: ThunkDispatchType) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}