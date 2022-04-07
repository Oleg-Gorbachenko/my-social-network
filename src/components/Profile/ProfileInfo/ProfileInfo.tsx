import React from "react";
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoProps = {
    profile: ProfileType | null
}

export const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
                     alt="content-img"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt="photo"/>
            </div>
        </div>
    )
}