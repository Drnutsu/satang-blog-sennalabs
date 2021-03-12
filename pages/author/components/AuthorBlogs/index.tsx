import React from 'react'
import {
  HeartFilled,
  MessageOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'
import Author from 'components/Author'
import Tag from 'components/tags/Tag'
import { useDeviceDetector } from 'hooks/deviceDetector'

import styles from './index.module.scss'
import { BlogCardProps } from './interface'

const BlogCard = ({
  tag,
  title,
  intro,
  isBlue,
  isNoIntro,
  isNoImage,
}: BlogCardProps) => {
  const { isMobile } = useDeviceDetector()
  return (
    <div className={`${styles.container}  ${isBlue && styles.blue}`}>
      <div className={styles.tag}>
        <Tag colorTheme={tag.color}>{tag.title}</Tag>
      </div>
      {(!isNoImage || isMobile) && (
        <div className={styles.image}>
          <img
            alt="blogPhoto"
            src="https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg"
          />
        </div>
      )}
      <div className={styles.topic}>{title}</div>
      {!isNoIntro && <div className={styles.intro}>{intro}</div>}
      <div className={styles.author}>
        <Author />
      </div>
      <div className={styles.actions}>
        <HeartFilled />
        <MessageOutlined />
        <ShareAltOutlined />
      </div>
    </div>
  )
}

export default BlogCard
