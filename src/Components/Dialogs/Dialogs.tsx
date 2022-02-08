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

let dialogsData = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Maks'},
    {id: 4, name: 'Anton'},
    {id: 5, name: 'Viktoriya'},
    {id: 6, name: 'Dmitry'}
]

let messagesData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you!'},
    {id: 3, message: 'Yo!'},
    {id: 4, message: 'Abrakadabra'}
]


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {/*<DialogItem name={dialogsData.map(t => t.name)} id={dialogsData.map(t => t.id)}*/}
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
                <Message message={messagesData[3].message} id={messagesData[3].id}/>
            </div>
        </div>
    )
}