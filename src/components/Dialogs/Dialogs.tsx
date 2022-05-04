import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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

type AddMessageFormType = {
    newMessageText: string
}

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessageText' placeholder='Enter your message'/>
            <button>add message</button>
        </form>
    );
};

const AddMessageReduxForm = reduxForm<AddMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm)