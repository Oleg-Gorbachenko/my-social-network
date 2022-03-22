import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {StoreType} from "../../redux/store";

export type MyDialogsPropsType = {
    store: StoreType
    updateNewMessageText: (text: string) => void
    onSendMessage: () => void
}

export const Dialogs = (props: MyDialogsPropsType) => {

    const dialogsElements = props.store.getState().dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name}
                                                                                            id={d.id}/>)
    const messagesElements = props.store.getState().dialogsPage.messages.map((m) => <Message key={m.id}
                                                                                             message={m.message}
                                                                                             id={m.id}/>)

    const onChangeTextareaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value
        props.updateNewMessageText(text)
    }

    const onClickButtonHandler = () => {
        props.onSendMessage()
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
            <textarea placeholder='Enter your message' value={props.store.getState().dialogsPage.newMessageText}
                      onChange={onChangeTextareaHandler}/>
            <button style={buttonStyle} onClick={onClickButtonHandler}>add</button>
        </div>
    )
}