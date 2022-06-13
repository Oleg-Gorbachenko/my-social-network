import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: ProfileInfoProps) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt="photo"/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <h2>{profile.fullName}</h2>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div>About Me: {profile.aboutMe}</div>
                <div>Looking for a job: {profile.lookingForAJob}</div>
                <div>Looking for a job description: {profile.lookingForAJobDescription}</div>

                {profile.contacts && <ul>My contacts:
                    <li>{profile.contacts.vk}</li>
                    <li>{profile.contacts.github}</li>
                    <li>{profile.contacts.facebook}</li>
                    <li>{profile.contacts.twitter}</li>
                    <li>{profile.contacts.website}</li>
                    <li>{profile.contacts.instagram}</li>
                    <li>{profile.contacts.mainLink}</li>
                    <li>{profile.contacts.youtube}</li>
                </ul>}

            </div>
        </div>
    )
}