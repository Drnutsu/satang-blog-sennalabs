import React from 'react'
import Link from 'next/link'
import styles from './index.module.scss'
import { ViewMoreUrlProps } from './interface'

const BlogsTitle = ({ viewMoreUrl, barColor, title }: ViewMoreUrlProps) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.bar} ${styles[barColor]}`}>{title}</div>

      <div className={styles.link}>
        <Link href={viewMoreUrl}>{`View more >`}</Link>
      </div>
    </div>
  )
}

export default BlogsTitle
