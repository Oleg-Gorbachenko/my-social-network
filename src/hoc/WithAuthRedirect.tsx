import React, {Component, ComponentType} from 'react';
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsForRedirectType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsForRedirectType => ({
    isAuth: state.auth.isAuth,
})

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: any) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={"/login"}/>
        return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}



