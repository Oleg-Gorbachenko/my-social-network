import {addPostAC, setStatus, setUserProfile} from "./profile-reducer";
import {addMessageAC} from "./dialogs-reducer";
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

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageAC>
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



export type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes | FormAction>;
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;
