import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Navbar} from "../Navbar/Navbar";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Button} from "../common/Button/Button";

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

export const Header = (props: HeaderPropsType) => {

  const avatar = useSelector<AppStateType, string>(state => state.profilePage.profile.photos.small)
  const userName = useSelector<AppStateType, string>(state => state.profilePage.profile.fullName)

  return (
    <header className={styles.header}>
      <Navbar/>
      {props.isAuth
        ?
        <div className={styles.wrapper}>
          <div className={styles.loginBlock}>
            <img className={styles.avatar} src={avatar} alt="ava"/>
            <div className={styles.userName}> {userName}</div>
          </div>
          <Button red onClick={props.logout} name={'Logout'}/>
        </div>
        : <NavLink to={'/Login'}>Login</NavLink>}
    </header>
  )
}