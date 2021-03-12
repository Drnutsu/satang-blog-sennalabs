import React from 'react'
import HeaderLeftDecorators from 'public/assets/images/header-left-decorators.svg'
import HeaderRightDecorators from 'public/assets/images/header-right-decorators.svg'
import Banner from 'public/assets/images/banner.svg'

import styles from './index.module.scss'
import Tag from 'components/tags/Tag'
import Paginate from './components/Paginate'
import MiniBlogCard from '../../../../../blog/MiniBlogCard'

const BannerHero = () => {
  return (
    <div className={styles.container}>
      <HeaderLeftDecorators />
      <div className={styles.slider}>
        <div className={styles['hero-slider']}>
          <div className={styles['left-side']}>
            <Tag colorTheme="green">ethereum</Tag>
            <div className={styles.title}>
              A Leap In Using Silicon For Battery Anodes
            </div>
            <div className={styles.intro}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient habitant enim, diam accumsan, urna. Viverra
              pellentesque dolor, lacus viverra sed nulla justo.
            </div>
            <Paginate />
          </div>
          <div className={styles['right-side']}>
            <Banner />
          </div>
        </div>
        <div className={styles['recommend-blog']}>
          <MiniBlogCard
            tag={{ color: 'pink', title: "Editor's Pick" }}
            blogAuthor={{
              duration: '1 min',
              date: 'May 15, 2021',
              name: 'Jane Smith',
              photoUrl:
                'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
            }}
            title="Astronomers Detect Most Energetic Outflow "
          />
          <MiniBlogCard
            tag={{ color: 'green', title: 'ethereum' }}
            blogAuthor={{
              duration: '1 min',
              date: 'May 15, 2021',
              name: 'Jane Smith',
              photoUrl:
                'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
            }}
            title="Astronomers Detect Most Energetic Outflow "
          />
          <MiniBlogCard
            tag={{ color: 'blue', title: 'bitcoin' }}
            blogAuthor={{
              duration: '1 min',
              date: 'May 15, 2021',
              name: 'Jane Smith',
              photoUrl:
                'https://img2.storyblok.com/800x0/f/43698/2240x1354/92e71f7bfc/article.jpg',
            }}
            title="Astronomers Detect Most Energetic Outflow "
          />
        </div>
      </div>
      <HeaderRightDecorators />
    </div>
  )
}
export default BannerHero
