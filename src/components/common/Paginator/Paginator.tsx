import React from 'react';
import styles from "./Paginator.module.css";

type UsersPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({pageSize, totalUsersCount, currentPage, onPageChanged}: UsersPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map((p, index) => <span key={index}
                                           className={currentPage === p ? styles.selectedPage : ''}
                                           onClick={() => {
                                               onPageChanged(p)
                                           }}>{p}</span>)}
        </div>
    );
}
