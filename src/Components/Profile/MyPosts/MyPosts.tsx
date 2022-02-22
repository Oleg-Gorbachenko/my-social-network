import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/State";

export type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: (newPostText: string) => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>)


    const onClickButtonHandler = () => {
        props.addPost(props.newPostText)
    }

    const onChangeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
    }


    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onChangeTextHandler}/>
                </div>
                <div>
                    <button onClick={onClickButtonHandler}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}