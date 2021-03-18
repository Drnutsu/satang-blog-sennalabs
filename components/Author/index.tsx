import React from 'react'
import styles from './index.module.scss'
import { BlogAuthor } from '../../interfaces/blog'

const Author = ({ blogAuthor }: { blogAuthor: BlogAuthor }) => {
  return (
    <div className={styles.container}>
      <div className={styles['author-photo']}>
        <img src={blogAuthor.photoUrl} />
      </div>
      <div className={styles['author-detail']}>
        <div>{blogAuthor.name}</div>
        <div>{blogAuthor.publicAt!.toFormat('LLL dd yyyy')}</div>
      </div>
      <div className={styles['time-ago']}>{blogAuthor.readTime} min</div>
    </div>
  )
}

export default Author
