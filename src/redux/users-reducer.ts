import {ActionsTypes} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

export type UsersType = {
    id: string
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type LocationType = {
    city: string
    country: string
}
const initialState = {
    users: [

    ] as Array<UsersType>
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
            // return {...state,users: [...state.users,...action.payload.users]} //возвращает 8 пользователей
            return {...state,users: action.payload.users} //возвращает 4 пользователя
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

export default usersReducer