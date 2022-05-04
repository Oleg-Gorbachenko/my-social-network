import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageReduxForm} from "./AddMessageForm/AddMessageForm";

export type AddMessageFormType = {
    newMessageText: string
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id}
                                                                           name={d.name}
                                                                           id={d.id}/>)
    const messagesElements = props.dialogsPage.messages.map((m) => <Message key={m.id}
                                                                            message={m.message}
                                                                            id={m.id}/>)

    const addNewMessage = (values: AddMessageFormType) => {
        props.onSendMessage(values.newMessageText)
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}



