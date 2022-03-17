import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../../redux/store";

type ProfilePropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action:ActionsTypes) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
                    />
        </div>
    )
}