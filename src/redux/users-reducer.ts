import {ActionsTypes, ThunkDispatchType} from "./store";
import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helper";

const FOLLOW = "users/FOLLOW"
const UNFOLLOW = "users/UNFOLLOW"
const SET_USERS = "users/SET_USERS"
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS"

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
    isFetching: true,
    followingInProgress: [] as string[]
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW : {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        }
        case UNFOLLOW : {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        }
        case SET_USERS: {
            return {...state, users: action.users} //возвращает 4 пользователя
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
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

//action creators
export const followSuccess = (userId: string) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

//thunks
export const requestUsers = (page: number, pageSize: number) => async (dispatch: ThunkDispatchType) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let response = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const onPageChangeThunkCreator = (pageNumber: number, pageSize: number) => async (dispatch: ThunkDispatchType) => {
    dispatch(setCurrentPage(pageNumber))
    dispatch(toggleIsFetching(true))
    let response = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
}

const followUnfollowFlow = async (dispatch: ThunkDispatchType, userId: string, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: string) => async (dispatch: ThunkDispatchType) => {
    followUnfollowFlow(dispatch, userId, usersAPI.followed.bind(usersAPI), followSuccess)
}

export const unfollow = (userId: string) => async (dispatch: ThunkDispatchType) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollowed.bind(usersAPI), unfollowSuccess)
}