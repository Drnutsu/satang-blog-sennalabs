import React from 'react'
import { DateTime } from 'luxon'
import HeaderLeftDecorators from 'public/assets/images/header-left-decorators.svg'
import HeaderRightDecorators from 'public/assets/images/header-right-decorators.svg'

import Tag from 'components/tags/Tag'
import MiniBlogCard from 'components/blog/MiniBlogCard'

import styles from './index.module.scss'
import Paginate from './components/Paginate'
import { withSlider } from './withSlider'
import { BannerHeroProps } from './interface'

const BannerHero = ({
  handleOnPaginate,
  currentActivePage,
  sliderRefs,
  sliderParentRef,
  refSwitcher,
  bannerContent,
}: BannerHeroProps) => {
  // console.log(
  //   'bannerContent.featured_articles',
  //   bannerContent.featured_articles,
  // )
  return (
    <div className={styles.container}>
      <HeaderLeftDecorators />
      <div className={styles.slider}>
        <div className={styles.banner} ref={sliderParentRef}>
          {bannerContent.featured_articles.map((article, index) => (
            <div
              className={styles['hero-slider']}
              ref={sliderRefs[refSwitcher(index)!]}
            >
              <div className={styles['left-side']}>
                <div className={styles['slider-group']}>
                  <div className={`${styles['slider-text']} index-${index}`}>
                    <Tag colorTheme={article.content.category.content.color}>
                      {article.content.category.content.title}
                    </Tag>
                    <div className={styles.title}>{article.content.title}</div>
                    <div className={styles.intro}>{article.content.intro}</div>
                  </div>
                </div>
              </div>
              <div className={styles['right-side']}>
                <img src={article.content.image.filename} />
              </div>
            </div>
          ))}
        </div>

        <Paginate
          currentActivePage={currentActivePage}
          onPaginate={handleOnPaginate}
          pagesAmount={3}
        />
        <div className={styles['recommend-blog']}>
          {bannerContent.featured_articles.map((article, index) => (
            <MiniBlogCard
              key={article.uuid}
              index={index}
              handleOnPaginate={handleOnPaginate}
              tag={{
                color: article.content.category.content.color,
                title: article.content.category.content.title,
              }}
              blogAuthor={{
                name: article.content.author.content.name,
                photoUrl: article.content.author.content.photo.filename,
                readTime: article.content.read_time,
                publicAt: DateTime.fromISO(article.published_at),
              }}
              title={article.content.title}
            />
          ))}
        </div>
      </div>
      <HeaderRightDecorators />
    </div>
  )
}
export default withSlider(BannerHero)
