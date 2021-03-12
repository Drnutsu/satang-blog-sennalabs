import React from 'react'
import styles from './index.module.scss'
import BlogsTitle from 'components/blog/BlogsTitle'
import BlogCard from 'components/blog/BlogCard'

const HighlightArticles = () => {
  return (
    <div className={styles.container}>
      <BlogsTitle barColor="blue" viewMoreUrl={'/'} title="Highlights" />

      <div className={styles['main-grid']}>
        <div className={styles['blue-sections']}>
          <BlogCard
            tag={{ title: 'บทวิเคราะห์', color: 'blue' }}
            title={'Skoltech Scientists Break Google’s'}
            intro={
              'koltech Scientists Break Google’skoltech Scientists Break Google’s'
            }
            blogAuthor={{
              duration: '1 min',
              date: 'May 15, 2021',
              name: 'Jane Smith',
              photoUrl:
                'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
            }}
            isNoIntro
            isBlue
            isNoImage
          />
          <BlogCard
            tag={{ title: 'บทวิเคราะห์', color: 'blue' }}
            title={'Skoltech Scientists Break Google’s'}
            intro={
              'koltech Scientists Break Google’skoltech Scientists Break Google’s'
            }
            blogAuthor={{
              duration: '1 min',
              date: 'May 15, 2021',
              name: 'Jane Smith',
              photoUrl:
                'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
            }}
            isNoIntro
            isBlue
            isNoImage
          />
        </div>
        <div className={styles['big-column']}>
          <BlogCard
            tag={{ title: 'บทวิเคราะห์', color: 'blue' }}
            title={'Skoltech Scientists Break Google’s'}
            intro={
              'koltech Scientists Break Google’skoltech Scientists Break Google’s'
            }
            blogAuthor={{
              duration: '1 min',
              date: 'May 15, 2021',
              name: 'Jane Smith',
              photoUrl:
                'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
            }}
          />
        </div>
        <BlogCard
          tag={{ title: 'บทวิเคราะห์', color: 'blue' }}
          title={'Skoltech Scientists Break Google’s'}
          intro={
            'koltech Scientists Break Google’skoltech Scientists Break Google’s'
          }
          blogAuthor={{
            duration: '1 min',
            date: 'May 15, 2021',
            name: 'Jane Smith',
            photoUrl:
              'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
          }}
          isNoImage
          isNoIntro
        />
        <BlogCard
          tag={{ title: 'บทวิเคราะห์', color: 'blue' }}
          title={'Skoltech Scientists Break Google’s'}
          intro={
            'koltech Scientists Break Google’skoltech Scientists Break Google’s'
          }
          blogAuthor={{
            duration: '1 min',
            date: 'May 15, 2021',
            name: 'Jane Smith',
            photoUrl:
              'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
          }}
          isNoImage
          isNoIntro
        />
        <BlogCard
          tag={{ title: 'บทวิเคราะห์', color: 'blue' }}
          title={'Skoltech Scientists Break Google’s'}
          intro={
            'koltech Scientists Break Google’skoltech Scientists Break Google’s'
          }
          blogAuthor={{
            duration: '1 min',
            date: 'May 15, 2021',
            name: 'Jane Smith',
            photoUrl:
              'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
          }}
          isNoImage
          isNoIntro
        />
      </div>
    </div>
  )
}

export default HighlightArticles
