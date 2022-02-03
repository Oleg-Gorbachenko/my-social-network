import React from "react";
import classes from './Header.module.css'

export const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZ9se8N-sEQ-LU7cYhO9hWVljFF3eS1vUYQ&usqp=CAU"
                alt="header-img"/>
        </header>
    )
}