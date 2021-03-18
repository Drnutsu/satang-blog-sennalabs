import React from 'react'
import BlogsTitle from 'components/blog/BlogsTitle'
import Pagination from 'components/Pagination'
import BlogsList from 'components/blog/BlogsList'

import styles from './index.module.scss'
import { ArticlesProps } from './interface'

const LastArticles = ({ articleStories, withPagination }: ArticlesProps) => {
  return (
    <div className={styles.container}>
      <BlogsTitle barColor="orange" viewMoreUrl="/" title="Last articles" />

      <BlogsList articles={articleStories.stories} />
      {withPagination && (
        <div className={styles.pagination}>
          <Pagination
            page={articleStories.page}
            totalPage={articleStories.totalPage}
          />
        </div>
      )}
    </div>
  )
}

export default LastArticles
