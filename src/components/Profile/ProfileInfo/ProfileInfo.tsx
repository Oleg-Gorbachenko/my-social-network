import React from "react";
import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
                     alt="content-img"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}