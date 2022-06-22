import React, {useEffect, useState} from 'react';
import styles from "./Paginator.module.css";
import cn from "classnames";
import {Button} from "../Button/Button";

type PaginatorPropsType = {
  pageSize: number
  totalItemsCount: number
  currentPage: number
  portionSize?: number
  onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({
                            pageSize,
                            totalItemsCount,
                            currentPage,
                            onPageChanged,
                            portionSize = 10
                          }: PaginatorPropsType) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)), [currentPage]);
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div className={styles.paginator}>
      {portionNumber > 1 &&
        <Button onClick={() => {
          setPortionNumber(portionNumber - 1)
        }} name={'PREV'}/>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => <span className={cn({
          [styles.selectedPage]: currentPage === p
        }, styles.pageNumber)}
                          key={p}
                          onClick={() => {
                            onPageChanged(p)
                          }}>{p}</span>)}
      {portionCount > portionNumber &&
        <Button onClick={() => {
          setPortionNumber(portionNumber + 1)
        }} name={'NEXT'}/>}
    </div>
  );
}