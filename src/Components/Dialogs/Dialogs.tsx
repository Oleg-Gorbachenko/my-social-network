import React, {ChangeEvent, useState} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/State";

export type MyDialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessage: (title: string) => void
}

export const Dialogs = (props: MyDialogsPropsType) => {

    const [title, setTitle] = useState<string>('')

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map((m) => <Message message={m.message} id={m.id}/>)

    const onChangeTextareaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
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
            <textarea value={title} onChange={onChangeTextareaHandler}></textarea>
            <button style={buttonStyle} onClick={onClickButtonHandler}>add</button>
        </div>
    )
}