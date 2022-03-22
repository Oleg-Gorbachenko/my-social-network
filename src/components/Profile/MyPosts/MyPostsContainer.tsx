import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export type PropsType = {
    // store: StoreType
}

export const MyPostsContainer = (props: PropsType) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const addPost = () => {
                    store.dispatch(addPostAC(store.getState().profilePage.newPostText))
                }
                const OnPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }
                return <MyPosts
                    posts={store.getState().profilePage.posts}
                    newPostText={store.getState().profilePage.newPostText}
                    updateNewPostText={OnPostChange}
                    addPost={addPost}
                />
            }
        }
        </StoreContext.Consumer>
    )
}