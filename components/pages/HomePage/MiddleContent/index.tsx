import React from 'react'
import styles from './index.module.scss'
import Tag from 'components/tags/Tag'
import { MiddleContentProps } from './interface'

const MiddleContent = ({ tag, blogAuthor, title }: MiddleContentProps) => {
  return (
    <div className={styles.container}>
      <Tag colorTheme={tag.color}>{tag.title}</Tag>
      <div className={styles.title}>{title}</div>
      <div className={styles.author}>
        <div className={styles.photo}>
          <img src={blogAuthor.photoUrl} />
        </div>
        <div className={styles.name}>{blogAuthor.name}</div>
      </div>
    </div>
  )
}

export default MiddleContent
