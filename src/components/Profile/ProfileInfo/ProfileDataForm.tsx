import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "../../Login/Login";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {ProfileType} from "../../../redux/profile-reducer";
import styles from "../../common/FormsControls/FormsControls.module.css";


const ProfileDataForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    const profile = useSelector<AppStateType, ProfileType>(state => state.profilePage.profile)
    return (
        <form onSubmit={handleSubmit}>
            <button onClick={() => {
            }}>save
            </button>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>Full name: </b> {createField("Full name", 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job: </b>
                {createField('', "lookingForAJob", [], Input, {type: 'checkbox'})}
            </div>
            <div><b>My professional skills: </b></div>
            {createField('My professional skills', "lookingForAJobDescription", [], Textarea)}
            <div><b>About Me: </b>
                {createField('AboutMe', "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts : </b> {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}:{createField(key, 'contacts.' + key, [], Input)}</b>
                </div>
            })}
            </div>
        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm<FormDataType>({form: 'edit-profile'})(ProfileDataForm)

