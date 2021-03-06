import React, {memo} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {Button} from "../../common/Button/Button";


export const MyPosts = memo((props: MyPostsPropsType) => {

    const postsElements = props.profilePage.posts.map(p => <Post key={p.id}
                                                                 message={p.message}
                                                                 likesCount={p.likesCount}
                                                                 id={p.id}/>)

    const addNewPost = (values: AddPostFormType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postBlock}>
            <h2>My posts</h2>
            <div>
                <AddPostReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

type AddPostFormType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)
const minLength2 = minLengthCreator(2)

export const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.formWrapper}>
                <Field
                    component={Textarea}
                    name='newPostText'
                    placeholder='Enter your message'
                    validate={[required, maxLength10, minLength2]}/>
            </div>
            <div className={s.button}>
                <Button name={'Add post'}/>
            </div>
        </form>
    );
};

const AddPostReduxForm = reduxForm<AddPostFormType>({form: 'dialogAddMessageForm'})(AddPostForm)