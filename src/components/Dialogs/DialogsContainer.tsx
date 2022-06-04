import React from "react";
import {addMessage, InitialStateType} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapStatePropsType = {
    dialogsPage: InitialStateType
}
type MapDispatchPropsType = {
    onSendMessage: (newMessageText:string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onSendMessage: (newMessageText:string) => {
            dispatch(addMessage(newMessageText))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(WithAuthRedirect(Dialogs))