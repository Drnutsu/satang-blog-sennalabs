import React from 'react'
import styles from './index.module.scss'
import { PaginationProps } from './interface'

const Pagination = ({}: PaginationProps) => {
  return (
    <div className={styles.container}>
      <div className={styles['page-text']}>Page <span>1</span> of <span>5</span></div>
      <div className={styles['next-btn']}>{'Next >'}</div>
    </div>
  )
}

export default Pagination
