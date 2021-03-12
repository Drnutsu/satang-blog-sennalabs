import React from 'react'
import styles from './index.module.scss'
import BannerHero from '../../Layout/components/Header/components/BannerHero'
import LastArticles from './components/LastArticles'
import HighlightArticles from './components/HighlightsArticles'
import MiddleContent from './MiddleContent'

const HomePage = () => {
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
      <BannerHero />
      <div className={styles['home-body']}>
        <LastArticles articles={articlesMockup.slice(0, 3)} />
        <HighlightArticles />
      </div>
      <div className={styles['middle-content']}>
        <MiddleContent
          tag={{ title: 'บทวิเคราะห์', color: 'red' }}
          blogAuthor={{
            duration: '1 min',
            date: 'May 15, 2021',
            name: 'Jane Smith',
            photoUrl:
              'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
          }}
          title="Amet minim mollit non deserunt ullamco est sit "
        />
      </div>
      <div className={styles['home-body']}>
        <LastArticles withPagination articles={articlesMockup} />
      </div>
    </div>
  )
}

export default HomePage
