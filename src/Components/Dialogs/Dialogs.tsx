import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
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

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={'Andrey'} id={1}/>
                <DialogItem name={'Oleg'} id={2}/>
                <DialogItem name={'Maks'} id={3}/>
                <DialogItem name={'Anton'} id={4}/>
                <DialogItem name={'Viktoriya'} id={5}/>
                <DialogItem name={'Dmitry'} id={6}/>

            </div>
            <div className={classes.messages}>
                <Message message={'Hi!'}/>
                <Message message={'How are you'}/>
                <Message message={'Yo'}/>
                <Message message={'Abrakadabra'}/>
            </div>
        </div>
    )
}