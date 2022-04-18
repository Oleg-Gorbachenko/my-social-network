import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<AuthPropsType, authType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }
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
    setAuthUserData: (userId: number, email: string, login: string) => void
}

export type AuthPropsType = mapStateToPropsType & mapDispatchPropsType

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);