import classes from "../Dialogs.module.css";
import React from "react";
import {MessageType} from "../../../index";


export const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}