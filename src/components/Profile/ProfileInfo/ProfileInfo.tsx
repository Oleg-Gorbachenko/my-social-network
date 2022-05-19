import React from "react";
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"*/}
            {/*         alt="content-img"/>*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt="photo"/>
                <h2>{props.profile.fullName}</h2>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div>About Me: {props.profile.aboutMe}</div>
                <div>Looking for a job: {props.profile.lookingForAJob}</div>
                <div>Looking for a job description: {props.profile.lookingForAJobDescription}</div>
                <div>My contacts:
                    <li>{props.profile.contacts.vk}</li>
                    <li>{props.profile.contacts.github}</li>
                    <li>{props.profile.contacts.facebook}</li>
                    <li>{props.profile.contacts.twitter}</li>
                    <li>{props.profile.contacts.website}</li>
                    <li>{props.profile.contacts.instagram}</li>
                    <li>{props.profile.contacts.mainLink}</li>
                    <li>{props.profile.contacts.youtube}</li>
                </div>
            </div>
        </div>
    )
}