import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
                alt="header-img"/>
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}