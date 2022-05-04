import React from "react";
import {addPostAC, InitialStateType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    profilePage: InitialStateType
}
type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)