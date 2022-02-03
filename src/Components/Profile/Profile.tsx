import React from "react";
import classes from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
                     alt="content-img"/>
            </div>
            <div className={classes.item}>
                ava + description
            </div>
            <div className={classes.item}>
                My posts
                <div className={classes.item}>
                    New post
                </div>
                <div>
                    <div className={classes.item}>
                        post 1
                    </div>
                    <div className={classes.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>

    )
}