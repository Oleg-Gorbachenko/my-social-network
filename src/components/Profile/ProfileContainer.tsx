import React, {ComponentType, JSXElementConstructor} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
  getStatus,
  getUsersProfile,
  ProfileType,
  savePhoto,
  saveProfile,
  updateStatus
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {FormDataType} from "../Login/Login";

type MapStatePropsType = {
  profile: ProfileType | null
  status: string
  userId: number | null
  isAuth: boolean
}

type MapDispatchPropsType = {
  getUsersProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
  savePhoto: (photo: File) => void
  saveProfile: (formData: FormDataType) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth,
})

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {

  refreshProfile() {
    // @ts-ignore
    let userId = this.props.router.params.userId;
    if (!userId || userId === '22956') {
      this.props.getUsersProfile(userId)
      //@ts-ignore
      this.props.router.navigate("/login")
    }
    this.props.getUsersProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
    //@ts-ignore
    if (this.props.router.params.userId != prevProps.router.params.userId) {
      this.refreshProfile()
    }
  }


  render() {
    let isOwner;
    //@ts-ignore
    isOwner = this.props.isAuth && this.props.userId == this.props.router.params.userId;
    return (
      <Profile
        {...this.props}
        //@ts-ignore
        isOwner={isOwner}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
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
  connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter
)(ProfileContainer)
