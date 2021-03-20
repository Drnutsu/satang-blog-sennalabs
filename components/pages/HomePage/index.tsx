import React from 'react'
import styles from './index.module.scss'
import BannerHero from '../../Layout/components/Header/components/BannerHero'
import LastArticles from './components/LastArticles'
import HighlightArticles from './components/HighlightsArticles'
import MiddleContent from './MiddleContent'
import {
  HomePageComponent,
} from '../../../interfaces/blog'
import { ArticleStories } from '../../../interfaces/pages/home'

const HomePage = ({
  contentBody,
  lastArticlesStories,
}: {
  contentBody: HomePageComponent
  lastArticlesStories: ArticleStories
}) => {
  const bannerContent = contentBody.body[0]
  const {
    top_article_section: middleArticle,
    last_articles_top: lastThreeArticles,
    highlight_section: highlightSection,
  } = contentBody.body[1]

  return (
    <div className={styles.container}>
      <BannerHero bannerContent={bannerContent} />
      <div className={styles['home-body']}>
        <LastArticles articleStories={{ stories: lastThreeArticles }} />
        <HighlightArticles articles={highlightSection} />
      </div>
      <div className={styles['middle-content']}>
        <MiddleContent
          tag={{
            title: middleArticle.content.category.content.title,
            color: middleArticle.content.category.content.color,
          }}
          blogAuthor={{
            name: middleArticle.content.author.content.name,
            photoUrl: middleArticle.content.author.content.photo.filename,
            readTime: middleArticle.content.read_time,
          }}
          title={middleArticle.content.title}
        />
      </div>
      <div className={styles['home-body']}>
        <LastArticles withPagination articleStories={lastArticlesStories} />
      </div>
    </div>
  )
}

export default HomePage
