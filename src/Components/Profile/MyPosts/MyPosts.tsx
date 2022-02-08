import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'How are you!', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 26}
    ]


    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} id={postsData[0].id}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} id={postsData[1].id}/>
            </div>
        </div>
    )
}