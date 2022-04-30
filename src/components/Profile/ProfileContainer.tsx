import React, {ComponentType, JSXElementConstructor} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    getUsersProfile: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
})

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        // @ts-ignore
        let userId = this.props.router.params.userId;
        this.props.getUsersProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

//оболочка для классовой компоненты
export const withRouter = (Component: JSXElementConstructor<any>): JSXElementConstructor<any> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getUsersProfile}),
    withRouter
)(ProfileContainer)
