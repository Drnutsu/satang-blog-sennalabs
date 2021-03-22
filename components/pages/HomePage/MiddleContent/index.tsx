import React from 'react'
import Tag from 'components/tags/Tag'
import { useArticleNavigator } from 'hooks/navigator/article'
import { MiddleContentProps } from './interface'
import styles from './index.module.scss'

const MiddleContent = ({
  tag,
  blogAuthor,
  title,
  slug,
}: MiddleContentProps) => {
  const navigate = useArticleNavigator()
  return (
    <div
      className={styles.container}
      tabIndex={-1}
      role="button"
      onClick={() => navigate(slug)}
    >
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
