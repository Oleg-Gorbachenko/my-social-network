import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authType, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<AuthPropsType, authType> {

    render() {
        return <Header {...this.props}/>
    }
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

type mapDispatchPropsType = {
    logout: () => void
}

export type AuthPropsType = mapStateToPropsType & mapDispatchPropsType

export default connect(mapStateToProps, {logout})(HeaderContainer);