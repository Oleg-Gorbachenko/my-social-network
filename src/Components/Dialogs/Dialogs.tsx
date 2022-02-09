import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";




let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

let messagesElements = messages.map((m) => <Message message={m.message} id={m.id}/>)

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}