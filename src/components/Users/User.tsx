import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
  user: UsersType
  follow: (userId: string) => void
  unfollow: (userId: string) => void
  followingInProgress: string[]
}

export const User = ({
                       user,
                       follow,
                       unfollow,
                       followingInProgress,
                     }: UsersPropsType) => {
  return (
    <div>
            <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img
                          src={user.photos.small || userPhoto}
                          alt="ava"
                          className={styles.userPhoto}/>
                             </NavLink>
                    </div>
                    <div>
                        {user.followed
                          ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                          }}>Unfollow</button>
                          : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                          }}>Follow</button>}
                    </div>
            </span>
      <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span><div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
            </span>
    </div>)
}