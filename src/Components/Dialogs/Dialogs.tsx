import React, {RefObject} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/State";


export const Dialogs = (props: DialogsPageType) => {

    let newMessage: RefObject<HTMLTextAreaElement> | undefined = React.createRef();

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map((m) => <Message message={m.message} id={m.id}/>)

    let addMessage = () => {
        let text = newMessage?.current?.value;
    }

    const buttonStyle = {
        width:'50px',
        height:'20px'
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessage}></textarea>
            <button style={buttonStyle}>add</button>
        </div>
    )
}