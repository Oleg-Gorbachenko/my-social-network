import React from "react";
import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export type PropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: PropsType) => {

    const addPost = () => {
        props.store.dispatch(addPostAC(props.store.getState().profilePage.newPostText))
    }

    const OnPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts
            store={props.store}
            updateNewPostText={OnPostChange}
            addPost={addPost}
        />
    )
}