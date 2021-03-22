import React from 'react'
import { ShareAltOutlined } from '@ant-design/icons'
import Author from 'components/Author'
import Tag from 'components/tags/Tag'
import { useDeviceDetector } from 'hooks/deviceDetector'
import { useArticleNavigator } from 'hooks/navigator/article'

import { BlogCardProps } from './interface'

import styles from './index.module.scss'

const BlogCard = ({
  tag,
  title,
  intro,
  isBlue,
  isNoIntro,
  isNoImage,
  image,
  blogAuthor,
  slug,
}: BlogCardProps) => {
  const { isMobile } = useDeviceDetector()
  const aricleNavigate = useArticleNavigator()
  return (
    <div
      role="button"
      tabIndex={-1}
      className={`${styles.container}  ${isBlue && styles.blue}`}
      onClick={() => aricleNavigate(slug)}
    >
      <div className={styles.tag}>
        <Tag colorTheme={tag.color}>{tag.title}</Tag>
      </div>
      {(!isNoImage || (isMobile && !isBlue)) && (
        <div className={styles.image}>
          <img alt="blogPhoto" src={image} />
        </div>
      )}
      <div className={styles.topic}>{title}</div>
      {!isNoIntro && <div className={styles.intro}>{intro}</div>}
      <div className={styles.author}>
        <Author blogAuthor={blogAuthor} />
      </div>
      <div className={styles.actions}>
        <ShareAltOutlined />
      </div>
    </div>
  )
}

export default BlogCard
