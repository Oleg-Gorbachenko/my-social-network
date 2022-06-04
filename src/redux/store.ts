import {addPostAC, deletePost, setStatus, setUserProfile} from "./profile-reducer";
import {addMessage} from "./dialogs-reducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess,
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {FormAction} from "redux-form";
import {initializedSuccess} from "./app-reducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof initializedSuccess>
    | ReturnType<typeof deletePost>


export type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes | FormAction>;
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;
