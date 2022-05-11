import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    onPageChangeThunkCreator,
    requestUsers,
    toggleFollowingProgress,
    unfollow,
    UsersType,
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

type MapDispatchPropsType = {
    unfollow: (userId: string) => void
    follow: (userId: string) => void
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onPageChangeThunkCreator: (pageNumber: number, pageSize: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

// const mapStateToProps = (state: AppStateType): MapStatePropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export class UsersContainer extends React.Component<UsersPropsType, UsersType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChangeThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> :
                < Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        onPageChanged={this.onPageChanged}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                        followingInProgress={this.props.followingInProgress}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                />
            }
        </>
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {
        toggleFollowingProgress,
        getUsersThunkCreator: requestUsers,
        onPageChangeThunkCreator,
        unfollow,
        follow,
    }))(UsersContainer)