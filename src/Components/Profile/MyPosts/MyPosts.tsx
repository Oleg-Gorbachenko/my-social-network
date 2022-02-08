import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let posts = [
        {id: 1, message: 'How are you!', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 26}
    ]

let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/> )


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
                {postsElements}
            </div>
        </div>
    )
}