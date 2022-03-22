import React from "react";
import {StoreType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

export type MyDialogsPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: MyDialogsPropsType) => {


    const updateNewMessageText = (text: string) => {
        props.store.dispatch(updateNewMessageTextAC(text))
    }

    const onSendMessage = () => {
        props.store.dispatch(addMessageAC(props.store.getState().dialogsPage.newMessageText))
    }

    return (
        <Dialogs
            store={props.store}
            updateNewMessageText={updateNewMessageText}
            onSendMessage={onSendMessage}
        />
    )
}