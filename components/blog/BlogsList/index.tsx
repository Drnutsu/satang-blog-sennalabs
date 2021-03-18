import React from 'react'

import styles from './index.module.scss'
import { BlogsListProps } from './interface'
import BlogCardMapper from '../BlogCard/BlogCardPropsMapper'

const BlogsList = ({ articles }: BlogsListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.blogs}>
        {articles.map((article, index) => (
          <BlogCardMapper article={article} index={index} />
        ))}
      </div>
    </div>
  )
}

export default BlogsList
