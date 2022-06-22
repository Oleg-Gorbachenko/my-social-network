import React from "react";
import s from './Post.module.css'
import {PostType} from "../../../../redux/profile-reducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import userPhoto from "../../../../assets/images/user.jpg";

export const Post = (props: PostType) => {

  const avatar = useSelector<AppStateType, string>(state => state.profilePage.myPhoto)
  const userName = useSelector<AppStateType, string | null>(state => state.auth.login)

  return (
    <div className={s.container}>
      <div className={s.header}>
        <img className={s.avatar} src={avatar || userPhoto} alt="avatar"/>
        <div>{userName}</div>
      </div>
      <div className={s.main}>{props.message}</div>
      <div className={s.footer}>
        <span>Likes: </span>{props.likesCount}
      </div>
    </div>
  )
}