import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogType, MessageType} from "../../redux/State";

export type MyDialogsPropsType = {
    newMessageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: MyDialogsPropsType) => {

    // const [title, setTitle] = useState<string>('')

    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.messages.map((m) => <Message key={m.id} message={m.message} id={m.id}/>)

    const onChangeTextareaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newTextMessage: text})
        // setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        // props.addMessage(title)
        // setTitle('')
        props.dispatch({type: "ADD-MESSAGE", newMessageText: props.newMessageText})
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
            <textarea value={props.newMessageText} onChange={onChangeTextareaHandler}/>
            <button style={buttonStyle} onClick={onClickButtonHandler}>add</button>
        </div>
    )
}