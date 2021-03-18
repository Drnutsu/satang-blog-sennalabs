import React from 'react'
import { GetServerSideProps, NextPageContext } from 'next'
import BlogsList from 'components/blog/BlogsList'
import Pagination from 'components/Pagination'
import styles from './index.module.scss'
import { StoryblokAPIService } from '../../api/storyblokAPIService'

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
      {/*<BlogsList articles={articlesMockup} />*/}
      <div className={styles.pagination}>
        <Pagination />
      </div>
    </div>
  )
}

export default CategoryPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('params', context.params)
  console.log('resolvedUrl', context.resolvedUrl)
  // the slug of the story
  const lang = 'th'
  const slug = `${lang ? `${lang}/` : ''}home`
  // the storyblok params
  const params = {
    version: 'draft', // or 'published'
    cv: 0,
    resolve_relations:
      'HeroBanner.categories,HeroBanner.featured_articles,HomeBody.top_article_section,HomeBody.last_articles_top',
  }

  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = 'draft'
    // appends the cache version to get the latest content
    params.cv = Date.now()
  }

  // loads the story from the Storyblok API
  const { data } = await StoryblokAPIService.get(`cdn/stories/${slug}`, params)
  // return the story from Storyblok and whether preview mode is active
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
    },
    // revalidate: 10,
  }
}
