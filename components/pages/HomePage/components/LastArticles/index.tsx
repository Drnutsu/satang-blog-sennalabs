import React from 'react'
import BlogsTitle from 'components/blog/BlogsTitle'
import Pagination from 'components/Pagination'
import BlogsList from 'components/blog/BlogsList'

import styles from './index.module.scss'
import { LastArticleProps } from './interface'

const LastArticles = ({ articles, withPagination }: LastArticleProps) => {
  return (
    <div className={styles.container}>
      <BlogsTitle barColor="orange" viewMoreUrl="/" title="Last articles" />

      <BlogsList articles={articles} />
      {withPagination && (
        <div className={styles.pagination}>
          <Pagination />
        </div>
      )}
    </div>
  )
}

export default LastArticles
