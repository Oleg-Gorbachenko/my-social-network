import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, addMessageAC, DialogType, MessageType, updateNewMessageTextAC} from "../../redux/State";

export type MyDialogsPropsType = {
    newMessageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: MyDialogsPropsType) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.messages.map((m) => <Message key={m.id} message={m.message} id={m.id}/>)

    const onChangeTextareaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.dispatch(updateNewMessageTextAC(text))
    }

    const onClickButtonHandler = () => {
        props.dispatch(addMessageAC(props.newMessageText))
    }

    const buttonStyle = {
        width: '50px',
        height: '20px'
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <textarea placeholder='Enter your message' value={props.newMessageText} onChange={onChangeTextareaHandler}/>
            <button style={buttonStyle} onClick={onClickButtonHandler}>add</button>
        </div>
    )
}