import React from 'react'
import {
  HeartFilled,
  MessageOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'
import Author from 'components/Author'
import Tag from 'components/tags/Tag'

import styles from './index.module.scss'
import { BlogCardProps } from './interface'
import { useDeviceDetector } from '../../../hooks/deviceDetector'

const BlogCard = ({
  tag,
  title,
  intro,
  isBlue,
  isNoIntro,
  isNoImage,
  image,
  blogAuthor,
}: BlogCardProps) => {
  const { isMobile } = useDeviceDetector()
  return (
    <div className={`${styles.container}  ${isBlue && styles.blue}`}>
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
        <HeartFilled />
        <MessageOutlined />
        <ShareAltOutlined />
      </div>
    </div>
  )
}

export default BlogCard
