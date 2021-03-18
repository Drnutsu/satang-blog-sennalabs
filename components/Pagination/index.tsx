import React from 'react'
import styles from './index.module.scss'
import { PaginationProps } from './interface'
import { useRouter } from 'next/router'

const Pagination = ({ page, totalPage }: PaginationProps) => {
  const router = useRouter()
  const handlePaginateRoute = (pageOrder: number) => {
    router.push(
      {
        query: {
          ...router.query,
          page: pageOrder,
        },
      },
      undefined,
      { scroll: false, locale: router.locale },
    )
  }
  return (
    <div className={styles.container}>
      {page! > 1 && (
        <div
          onClick={() => {
            handlePaginateRoute(page! - 1)
          }}
          className={styles.btn}
        >
          {'< Back'}
        </div>
      )}
      <div className={styles['page-text']}>
        Page <span>{page}</span> of <span>{totalPage}</span>
      </div>
      {page! < totalPage! && (
        <div
          onClick={() => {
            handlePaginateRoute(page! + 1)
          }}
          className={styles.btn}
        >
          {'Next >'}
        </div>
      )}
    </div>
  )
}

export default Pagination
