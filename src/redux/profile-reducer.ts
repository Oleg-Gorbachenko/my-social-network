import {v1} from "uuid";
import {ActionsTypes, ThunkDispatchType} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {FormDataType} from "../components/Login/Login";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

const ADD_POST = "profile/ADD-POST"
const DELETE_POST = "profile/DELETE-POST"
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOto_SUCCESS"

export type ProfileType = {
    aboutMe: string
    contacts: any
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
    profile: ProfileType
    status: string
}


const initialState = {
    posts: [
        {id: v1(), message: 'How are you!', likesCount: 15},
        {id: v1(), message: 'It\'s my first post', likesCount: 26}
    ] as Array<PostType>,
    profile: {
        aboutMe: '',
        contacts: {} as ProfileContactsType,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 1,
        photos: {} as ProfilePhotosType,
    },
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
        case SAVE_PHOTO_SUCCESS: {
            if (state.profile) {
                return {...state, profile: {...state.profile, photos: action.photos}}
            } else {
                return state
            }
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
export const savePhotoSuccess = (photos: ProfilePhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)

//thunks
export const getUsersProfile = (userId: string) => async (dispatch: ThunkDispatchType) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: string) => async (dispatch: ThunkDispatchType) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: ThunkDispatchType) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (photo: File) => async (dispatch: ThunkDispatchType) => {
    const response = await profileAPI.savePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (formData: FormDataType) => async (dispatch: ThunkDispatchType, getState: AppStateType) => {
    // @ts-ignore
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(formData)
    if (response.data.resultCode === 0) {
        dispatch(getUsersProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}