import React, {ChangeEvent, useState} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/State";

export type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (title: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let[title,setTitle]=useState<string>('')
    // let newPostElement: RefObject<HTMLTextAreaElement> | undefined = React.createRef();

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let onClickButtonHandler = () => {
        props.addPost(title)
        setTitle('')
    }

    const onChangeTextHandler=(event:ChangeEvent<HTMLTextAreaElement>)=>{
        setTitle(event.currentTarget.value)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={title} onChange={onChangeTextHandler}></textarea>
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