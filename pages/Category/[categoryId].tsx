import React from 'react'
import { NextPageContext } from 'next'
import BlogsList from 'components/blog/BlogsList'
import Pagination from 'components/Pagination'
import styles from './index.module.scss'

const CategoryPage = ({ authorId }) => {
  const articlesMockup = [
    {
      tag: { title: 'บทวิเคราะห์', color: 'blue' },
      title: 'Skoltech Scientists Break Google’s',
      intro:
        'koltech Scientists Break Google’skoltech Scientists Break Google’s',
      blogAuthor: {
        duration: '1 min',
        date: 'May 15, 2021',
        name: 'Jane Smith',
        photoUrl:
          'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
      },
    },
    {
      tag: { title: 'บทวิเคราะห์', color: 'blue' },
      title: 'Skoltech Scientists Break Google’s',
      intro:
        'koltech Scientists Break Google’skoltech Scientists Break Google’s',
      blogAuthor: {
        duration: '1 min',
        date: 'May 15, 2021',
        name: 'Jane Smith',
        photoUrl:
          'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
      },
    },
    {
      tag: { title: 'บทวิเคราะห์', color: 'blue' },
      title: 'Skoltech Scientists Break Google’s',
      intro:
        'koltech Scientists Break Google’skoltech Scientists Break Google’s',
      blogAuthor: {
        duration: '1 min',
        date: 'May 15, 2021',
        name: 'Jane Smith',
        photoUrl:
          'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
      },
    },
    {
      tag: { title: 'บทวิเคราะห์', color: 'blue' },
      title: 'Skoltech Scientists Break Google’s',
      intro:
        'koltech Scientists Break Google’skoltech Scientists Break Google’s',
      blogAuthor: {
        duration: '1 min',
        date: 'May 15, 2021',
        name: 'Jane Smith',
        photoUrl:
          'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
      },
    },
    {
      tag: { title: 'บทวิเคราะห์', color: 'blue' },
      title: 'Skoltech Scientists Break Google’s',
      intro:
        'koltech Scientists Break Google’skoltech Scientists Break Google’s',
      blogAuthor: {
        duration: '1 min',
        date: 'May 15, 2021',
        name: 'Jane Smith',
        photoUrl:
          'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
      },
    },
    {
      tag: { title: 'บทวิเคราะห์', color: 'blue' },
      title: 'Skoltech Scientists Break Google’s',
      intro:
        'koltech Scientists Break Google’skoltech Scientists Break Google’s',
      blogAuthor: {
        duration: '1 min',
        date: 'May 15, 2021',
        name: 'Jane Smith',
        photoUrl:
          'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
      },
    },
    {
      tag: { title: 'บทวิเคราะห์', color: 'blue' },
      title: 'Skoltech Scientists Break Google’s',
      intro:
        'koltech Scientists Break Google’skoltech Scientists Break Google’s',
      blogAuthor: {
        duration: '1 min',
        date: 'May 15, 2021',
        name: 'Jane Smith',
        photoUrl:
          'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
      },
    },
    {
      tag: { title: 'บทวิเคราะห์', color: 'blue' },
      title: 'Skoltech Scientists Break Google’s',
      intro:
        'koltech Scientists Break Google’skoltech Scientists Break Google’s',
      blogAuthor: {
        duration: '1 min',
        date: 'May 15, 2021',
        name: 'Jane Smith',
        photoUrl:
          'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
      },
    },

    {
      tag: { title: 'บทวิเคราะห์', color: 'blue' },
      title: 'Skoltech Scientists Break Google’s',
      intro:
        'koltech Scientists Break Google’skoltech Scientists Break Google’s',
      blogAuthor: {
        duration: '1 min',
        date: 'May 15, 2021',
        name: 'Jane Smith',
        photoUrl:
          'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
      },
    },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.title}>บทวิเคราะห์</div>
      <BlogsList articles={articlesMockup} />
      <div className={styles.pagination}>
        <Pagination />
      </div>
    </div>
  )
}

export default CategoryPage

CategoryPage.getInitialProps = ({ query }: NextPageContext) => {
  return { categoryId: query?.categoryId }
}
