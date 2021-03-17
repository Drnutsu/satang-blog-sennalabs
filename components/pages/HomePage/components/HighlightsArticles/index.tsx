import React from 'react'
import BlogsTitle from 'components/blog/BlogsTitle'

import styles from './index.module.scss'
import { BlogsListProps } from '../../../../blog/BlogsList/interface'
import BlogCardMapper from '../../../../blog/BlogCard/BlogCardPropsMapper'

const HighlightArticles = ({ articles }: BlogsListProps) => {
  const [highlightArticle1, highlightArticle2, ...restArticles] = articles
  const highlightArticles = [highlightArticle1, highlightArticle2]
  return (
    <div className={styles.container}>
      <BlogsTitle barColor="blue" viewMoreUrl="/" title="Highlights" />

      <div className={styles['main-grid']}>
        <div className={styles['blue-sections']}>
          {highlightArticles.map((article, index) => (
            <BlogCardMapper article={article} index={index} isBlue />
          ))}
        </div>
        <div className={styles['big-column']}>
          {restArticles.map((article, index) => (
            <BlogCardMapper article={article} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HighlightArticles
