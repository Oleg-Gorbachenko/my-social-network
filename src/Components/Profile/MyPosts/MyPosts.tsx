import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {


    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/> )


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
                {props.postsElements}
            </div>
        </div>
    )
}