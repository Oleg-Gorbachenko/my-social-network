import React from "react";
import classes from './Post.module.css'
import {PostType} from "../../../../index";


export const Post = (props: PostType) => {
    return (
        <div>
            <div className={classes.item}>
                <img
                    src="data:image/jpeg;base64,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"
                    alt="avatar"/>
                {props.message}
                <div>
                    <span>like </span>{props.likesCount}
                </div>
            </div>
        </div>
    )
}