import React from 'react'
import styles from './index.module.scss'
import { TagProps } from './interface'

const Tag = ({ colorTheme, children }: TagProps) => {
  return (
    <div className={`${styles.container} ${styles[colorTheme]}`}>
      {children}
    </div>
  )
}

export default Tag
