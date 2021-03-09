import React from 'react'
import styles from './index.module.scss'

const Author = () => {
  return (
    <div className={styles.container}>
      <div className={styles['author-photo']}>
        <img src="https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg" />
      </div>
      <div className={styles['author-detail']}>
        <div>Name Jaaa</div>
        <div>Date time</div>
      </div>
      <div className={styles['time-ago']}>1 min</div>
    </div>
  )
}

export default Author
