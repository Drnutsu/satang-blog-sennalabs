import React from 'react'
import { Tag } from 'antd'
import {
  HeartFilled,
  MessageOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'
import Author from 'components/Author'

import styles from './index.module.scss'

type BlogCardProps = {
  topic: string
  intro: string
}

const BlogCard = ({ topic, intro }: BlogCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <Tag color="red">red</Tag>
      </div>
      <div className={styles.image}>
        <img src="https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg" />
      </div>
      <div className={styles.topic}>{topic}</div>
      <div className={styles.intro}>{intro}</div>
      <Author />
      <div className={styles.actions}>
        <HeartFilled />
        <MessageOutlined />
        <ShareAltOutlined />
      </div>
    </div>
  )
}

export default BlogCard
