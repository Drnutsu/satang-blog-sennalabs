import React from 'react'

import styles from './index.module.scss'
import BlogCard from '../BlogCard'
import { BlogsListProps } from './interface'

const BlogsList = ({ articles }: BlogsListProps) => {
  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default BlogsList
