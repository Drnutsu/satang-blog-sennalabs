import React from 'react'
import styles from './index.module.scss'
import BlogsTitle from 'components/blog/BlogsTitle'
import BlogCard from 'components/blog/BlogCard'
import Pagination from 'components/Pagination'
import { LastArticleProps } from './interface'

const LastArticles = ({ articles, withPagination }: LastArticleProps) => {
  return (
    <div className={styles.container}>
      <BlogsTitle barColor="orange" viewMoreUrl={'/'} title="Last articles" />
      <div className={styles.blogs}>
        {articles.map((article, index) => (
          <BlogCard
            key={article.title + index}
            tag={article.tag}
            title={article.title}
            intro={article.intro}
            blogAuthor={article.blogAuthor}
          />
        ))}
      </div>
      {withPagination && (
        <div className={styles.pagination}>
          <Pagination />
        </div>
      )}
    </div>
  )
}

export default LastArticles
