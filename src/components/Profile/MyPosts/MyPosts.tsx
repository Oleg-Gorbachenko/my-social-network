import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.profilePage.posts.map(p => <Post key={p.id}
                                                                 message={p.message}
                                                                 likesCount={p.likesCount}
                                                                 id={p.id}/>)

    const onClickButtonHandler = () => {
        props.addPost()
    }

    const onChangeTextHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Enter your message' value={props.profilePage.newPostText}
                              onChange={onChangeTextHandler}/>
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