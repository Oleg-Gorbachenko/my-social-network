import {ActionsTypes} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

export type UsersType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
type PhotosType = {
    small: string | undefined
    large: string | undefined
}

type LocationType = {
    city: string
    country: string
}

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 4,
}

export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    //функция подписаться
    switch (action.type) {
        case FOLLOW : {
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userID ? {
                    ...u,
                    followed: true
                } : u)
            }
        }
        case UNFOLLOW : {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userID ? {
                    ...u,
                    followed: false
                } : u)
            }
        }
        case SET_USERS: {
            return {...state, users: action.payload.users} //возвращает 4 пользователя
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default:
            return state
    }
}
export const followAC = (userID: string) => {
    return {
        type: FOLLOW,
        payload: {userID}
    } as const
}
export const unfollowAC = (userID: string) => {
    return {
        type: UNFOLLOW,
        payload: {userID}
    } as const
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        payload: {users}
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {currentPage}
    } as const
}
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)

export default usersReducer