import React from 'react'

import styles from './index.module.scss'

const AuthorCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles['author-photo']}>
        <img src="https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg" />
      </div>
      <div className={styles['author-detail']}>
        <div className={styles['author-info']}>
          <div className={styles.name}> Kevin Green</div>
          <div className={styles.position}> CTO - Co Founder</div>
        </div>
        <div className={styles['author-desc']}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.-
        </div>
      </div>
    </div>
  )
}

export default AuthorCard
