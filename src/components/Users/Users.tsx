import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from './User';

type UsersPropsType = {
  users: Array<UsersType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (userId: string) => void
  unfollow: (userId: string) => void
  onPageChanged: (pageNumber: number) => void
  toggleFollowingProgress: (isFetching: boolean, userId: string) => void
  followingInProgress: string[]
}

export const Users = ({
                        users,
                        pageSize,
                        totalUsersCount,
                        currentPage,
                        follow,
                        unfollow,
                        onPageChanged,
                        followingInProgress,
                      }: UsersPropsType) => {

  return (
    <div>
      <Paginator pageSize={pageSize}
                 totalItemsCount={totalUsersCount}
                 currentPage={currentPage}
                 onPageChanged={onPageChanged}/>
      {users.map((u) => <User key={u.id}
                              user={u}
                              followingInProgress={followingInProgress}
                              follow={follow}
                              unfollow={unfollow}
        />
      )}
    </div>
  );
}
