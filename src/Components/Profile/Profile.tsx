import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, PostType, ProfilePageType} from "../../redux/State";

type MyProfilePropsType = {
    posts: Array<PostType>
    addPost: (title: string) => void
}

export const Profile = (props:MyProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={addPost}/>
        </div>
    )
}