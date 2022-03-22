import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export type MyDialogsPropsType = {
    // store: StoreType
}

export const DialogsContainer = (props: MyDialogsPropsType) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                const updateNewMessageText = (text: string) => {
                    store.dispatch(updateNewMessageTextAC(text))
                }
                const onSendMessage = () => {
                    store.dispatch(addMessageAC(store.getState().dialogsPage.newMessageText))
                }
                return <Dialogs
                    updateNewMessageText={updateNewMessageText}
                    onSendMessage={onSendMessage}
                    dialogs={store.getState().dialogsPage.dialogs}
                    messages={store.getState().dialogsPage.messages}
                    newMessageText={store.getState().dialogsPage.newMessageText}
                />
            }
        }
        </StoreContext.Consumer>
    )
}