import React from 'react'
import styles from './index.module.scss'
import { SliderPaginateProps } from './interface'

const Paginate = ({
  pagesAmount,
  onPaginate,
  currentActivePage,
}: SliderPaginateProps) => {
  const pages = [...new Array(pagesAmount)]

  const handleClickPaginate = (pageIndex: number) => {
    onPaginate(pageIndex)
  }
  return (
    <div className={styles.container}>
      {pages.map((_, index) => (
        <div
          key={index}
          onClick={() => handleClickPaginate(index)}
          className={`${styles.dot} ${
            currentActivePage === index && styles.active
          }`}
          tabIndex={-1}
          role="button"
          aria-label="paginate"
        />
      ))}
    </div>
  )
}
export default Paginate
