import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Navbar} from "../Navbar/Navbar";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

export const Header = (props: HeaderPropsType) => {

  const avatar = useSelector<AppStateType, string>(state => state.profilePage.profile.photos.small)
  const userName = useSelector<AppStateType, string>(state => state.profilePage.profile.fullName)
  console.log(avatar)
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Navbar/>
        {props.isAuth
          ?
          <div className={s.wrapper}>
            <div className={s.loginBlock}>
              <img className={s.avatar} src={avatar} alt="ava"/>
              <div className={s.userName}> {userName}</div>
            </div>
            <div className={s.logout} onClick={props.logout}>{'Logout'}</div>
          </div>
          : <NavLink to={'/Login'}>Login</NavLink>}
      </div>
    </header>
  )
}