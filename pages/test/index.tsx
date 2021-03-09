import React, { useEffect } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'
import {
  highlightBlogActions,
  highlightsBlogSelectors,
} from 'store/highlightsBlog'
import BlogCard from '../../components/blog/BlogCard'

export default function Contact() {
  const dispatch = useDispatch()
  const highlightBlog = useSelector(highlightsBlogSelectors.highlightBlog)
  useEffect(() => {
    dispatch(highlightBlogActions.fetchHighlights())
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Satang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">HighLight stories</div>
      <div className={styles.boxes}>
        {highlightBlog.map((data: any) => (
          <BlogCard topic={data.content.title} intro={data.content.intro} />
        ))}
      </div>
    </div>
  )
}
