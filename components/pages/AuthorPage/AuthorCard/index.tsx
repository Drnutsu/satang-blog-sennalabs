import React from 'react'
import { useAuthorNavigator } from 'hooks/navigator/author'

import styles from './index.module.scss'
import { AuthorCardProps } from './interface'

const AuthorCard = ({ authorStory, isSmall, slug }: AuthorCardProps) => {
  const authorNavigate = useAuthorNavigator()
  return (
    <div
      role="button"
      tabIndex={-1}
      onClick={() => authorNavigate(slug!)}
      className={`${styles.container} ${isSmall && styles['is-small']}`}
    >
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
