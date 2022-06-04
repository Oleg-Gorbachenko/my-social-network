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

export const ProfileInfo = ({profile, status, updateStatus}: ProfileInfoProps) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large} alt="photo"/>
                <h2>{profile.fullName}</h2>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div>About Me: {profile.aboutMe}</div>
                <div>Looking for a job: {profile.lookingForAJob}</div>
                <div>Looking for a job description: {profile.lookingForAJobDescription}</div>
                <div>My contacts:
                    <li>{profile.contacts.vk}</li>
                    <li>{profile.contacts.github}</li>
                    <li>{profile.contacts.facebook}</li>
                    <li>{profile.contacts.twitter}</li>
                    <li>{profile.contacts.website}</li>
                    <li>{profile.contacts.instagram}</li>
                    <li>{profile.contacts.mainLink}</li>
                    <li>{profile.contacts.youtube}</li>
                </div>
            </div>
        </div>
    )
}