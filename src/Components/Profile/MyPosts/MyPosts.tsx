import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='How are you' likesCount= {15}/>
                <Post message={`It's my first post`} likesCount={26}/>
            </div>
        </div>
    )
}