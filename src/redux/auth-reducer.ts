import {ActionsTypes, ThunkDispatchType} from "./store";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppStateType} from "./redux-store";
import {getUsersProfile} from "./profile-reducer";

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";

export type authType = {
  userId: number
  email: string
  login: string
}

export type initialStateType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
  captchaUrl: string | null
  currentCaptchaValue: string | null
}

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
  currentCaptchaValue: null,
}

export const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action,
        isAuth: action.isAuth
      }
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state, captchaUrl: action.captchaUrl
      }
    case SET_CAPTCHA_URL:
      return {
        ...state, currentCaptchaValue: action.currentCaptchaValue
      }
    default:
      return state
  }
}

//action creators
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
  type: SET_USER_DATA,
  userId, email, login, isAuth
} as const)
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl} as const)
export const setCaptchaUrl = (currentCaptchaValue: string) => ({type: SET_CAPTCHA_URL, currentCaptchaValue} as const)

//thunks
export const getAuthUserData = () => async (dispatch: ThunkDispatchType) => {
  let response = await authAPI.me()
  if (response.data.resultCode === 0) {
    let {id, email, login} = response.data.data
    dispatch(setAuthUserData(id, email, login, true))
    await dispatch(getUsersProfile(id))
  }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: ThunkDispatchType, getState: () => AppStateType) => {
  const captcha = getState().auth.currentCaptchaValue
  let response = await authAPI.login(email, password, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    await dispatch(getAuthUserData())
  } else {
    if (response.data.resultCode === 10) {
      await dispatch(getCaptchaUrl())
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
    dispatch(stopSubmit("login", {_error: message}))
  }
}

export const logout = () => async (dispatch: ThunkDispatchType) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = () => async (dispatch: ThunkDispatchType) => {
  let response = await securityAPI.getCaptchaUrl()
  dispatch(getCaptchaUrlSuccess(response.data.url))
}
