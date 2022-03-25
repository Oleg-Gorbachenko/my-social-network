import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";

type MapStatePropsType = {
    users: Array<UsersType>
}

type MapDispatchPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UsersType>) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)