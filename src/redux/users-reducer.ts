import {ActionsTypes} from "./store";
import {usersAPI} from "../api/api";
import {AppStateType} from "./redux-store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

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

// export type followingType = {
//     isFetching: boolean
//     userId: number
// }

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 4,
    isFetching: true,
    followingInProgress: [] as string[]
}

export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    //функция подписаться
    switch (action.type) {
        case FOLLOW : {
            return {
                ...state, users: state.users.map(u => u.id === action.payload.userId ? {
                    ...u,
                    followed: true
                } : u)
            }
        }
        case UNFOLLOW : {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}
export const followSuccess = (userId: string) => {
    return {
        type: FOLLOW,
        payload: {userId}
    } as const
}
export const unfollowSuccess = (userId: string) => {
    return {
        type: UNFOLLOW,
        payload: {userId}
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        payload: {users}
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {currentPage}
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
} as const)

export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

export const toggleFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching, userId
} as const)

type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes>;
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;

export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const onPageChangeThunkCreator = (pageNumber: number, pageSize: number): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
            })
    }
}

export const follow = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.followed(userId)
            .then(data => {
                debugger
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatchType) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollowed(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


export default usersReducer