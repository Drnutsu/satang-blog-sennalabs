import React from 'react'

import styles from './index.module.scss'
import { AuthorCardProps } from './interface'

const AuthorCard = ({ authorStory, isSmall }: AuthorCardProps) => {
  return (
    <div className={`${styles.container} ${isSmall && styles['is-small']}`}>
      <div className={styles['author-photo']}>
        <img src={authorStory.content.photo.filename} />
      </div>
      <div className={styles['author-detail']}>
        <div className={styles['author-info']}>
          <div className={styles.name}> {authorStory.content.name}</div>
          <div className={styles.position}> {authorStory.content.position}</div>
        </div>
        <div className={styles['author-desc']}>{authorStory.content.about}</div>
      </div>
    </div>
  )
}

export default AuthorCard
