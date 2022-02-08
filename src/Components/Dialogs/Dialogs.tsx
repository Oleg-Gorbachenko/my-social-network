import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
    id: number
}

export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

let dialogs = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Maks'},
    {id: 4, name: 'Anton'},
    {id: 5, name: 'Viktoriya'},
    {id: 6, name: 'Dmitry'}
]

let messages = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you!'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Abrakadabra'}
]

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