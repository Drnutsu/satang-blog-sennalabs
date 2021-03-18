import React from 'react'
import styles from './index.module.scss'
import { MiniBlogCardProps } from './interface'
import Tag from 'components/tags/Tag'

const MiniBlogCard = ({
  tag,
  title,
  blogAuthor,
  handleOnPaginate,
  index,
}: // withProfilePhoto,
MiniBlogCardProps) => {
  return (
    <div
      role="button"
      tabIndex={-1}
      className={`${styles.container} `}
      onClick={() => handleOnPaginate(index)}
    >
      <div className={styles.box}>
        <Tag colorTheme={tag.color}>{tag.title}</Tag>
        <div className={styles.title}>{title}</div>
        <div className={styles.author}>
          <div className={styles.name}>{blogAuthor.name}</div>
          <div className={styles.date}>
            <div className={styles.dot} />
            {blogAuthor.publicAt!.toFormat('LLL dd yyyy')}
            <div className={styles.dot} />
          </div>
          <div className={styles.duration}>{blogAuthor.readTime} mins</div>
        </div>
      </div>
    </div>
  )
}

export default MiniBlogCard
