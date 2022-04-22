import {addPostAC, setUserProfile, updateNewPostTextAC} from "./profile-reducer";
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

