import React from 'react'
import styles from './index.module.scss'
import { MiniBlogCardProps } from './interface'
import Tag from 'components/tags/Tag'

const MiniBlogCard = ({
  tag,
  title,
  blogAuthor,
  // withProfilePhoto,
}: MiniBlogCardProps) => {
  return (
    <div className={`${styles.container} `}>
      <div className={styles.box}>
        <Tag colorTheme={tag.color}>{tag.title}</Tag>
        <div className={styles.title}>{title}</div>
        <div className={styles.author}>
          <div className={styles.name}>{blogAuthor.name}</div>
          <div className={styles.date}>{blogAuthor.date}</div>
          <div className={styles.duration}>{blogAuthor.duration}</div>
        </div>
      </div>
    </div>
  )
}

export default MiniBlogCard
