import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
                     alt="content-img"/>
            </div>
            <div className={classes.item}>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}