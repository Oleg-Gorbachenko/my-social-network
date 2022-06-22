import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Navbar} from "../Navbar/Navbar";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import userPhoto from "../../assets/images/user.jpg";

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

export const Header = (props: HeaderPropsType) => {

  const avatar = useSelector<AppStateType, string>(state => state.profilePage.myPhoto)
  const fullName = useSelector<AppStateType, string | null>(state => state.auth.login)

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Navbar/>
        {props.isAuth
          ?
          <div className={s.wrapper}>
            <div className={s.loginBlock}>
              <img className={s.avatar} src={avatar || userPhoto} alt="ava"/>
              <div className={s.userName}> {fullName}</div>
            </div>
            <div className={s.logout} onClick={props.logout}>{'Logout'}</div>
          </div>
          : <NavLink to={'/Login'}>Login</NavLink>}
      </div>
    </header>
  )
}