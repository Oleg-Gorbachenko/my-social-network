import {addPostAC, setStatus, setUserProfile, updateNewPostTextAC} from "./profile-reducer";
import {addMessageAC, updateNewMessageTextAC} from "./dialogs-reducer";
import {
    setCurrentPage,
    toggleIsFetching,
    setUsers,
    setTotalUsersCount,
    toggleFollowingProgress,
    followSuccess,
    unfollowSuccess,
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>
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



export type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes>;
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;
