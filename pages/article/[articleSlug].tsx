import React from 'react'
import { GetServerSideProps } from 'next'
import ReactMarkdown from 'react-markdown'
import TwitterIcon from 'public/assets/images/shareable-icons/twitter.svg'
import FacebookIcon from 'public/assets/images/shareable-icons/facebook.svg'
import LinkInIcon from 'public/assets/images/shareable-icons/link-in.svg'
import EmailIcon from 'public/assets/images/shareable-icons/email.svg'
import { DateTime } from 'luxon'

import { StoryblokAPIService } from 'api/storyblokAPIService'
import { articleRelation } from 'constants/storyblokRelational'
import { ArticleBlogPageProps } from 'interfaces/pages/article'
import { ArticleComponentType, ComponentQueryBase } from 'interfaces/blog'
import useStoryblok from 'hooks/storyblok'
import AuthorCard from 'components/pages/AuthorPage/AuthorCard'
import BlogCardMapper from 'components/blog/BlogCard/BlogCardPropsMapper'
import { reloadArticleStoryblokRelational } from 'utils/artiStory/reloadArticleStoryblokRelational'
import styles from './index.module.scss'
import { STORYBLOK_VERSION } from '../../constants/env'

const ArticleBlogPage = ({ articleStory }: ArticleBlogPageProps) => {
  const articleRealTimeStory: ComponentQueryBase<ArticleComponentType> = useStoryblok(
    {
      originalStory: articleStory,
      relational: articleRelation,
      callback: reloadArticleStoryblokRelational,
    },
  )
  return (
    <div className={styles.container}>
      <div className={styles['top-section']}>
        <div className={styles.title}>{articleStory.content.title}</div>
        <div className={styles['article-meta']}>
          <div className={styles['author-name']}>
            By <span>{articleStory.content.author.content.name}</span>
          </div>
          <div className={styles['category-publish']}>
            Publish in{' '}
            <span>{articleStory.content.category.content.title}</span>
          </div>
          <div className={styles['publish-time']}>
            {DateTime.fromISO(articleStory.published_at).toFormat(
              'LLL dd yyyy',
            )}
          </div>
          <div className={styles['read-time']}>
            {articleStory.content.read_time} min read
          </div>
        </div>
      </div>
      <div className={styles['article-photo']}>
        <img src={articleStory.content.image.filename} />
      </div>
      <div className={styles['article-body']}>
        <div className={styles['left-section']}>
          <div className={styles['top-section']}>
            <ReactMarkdown>{articleRealTimeStory.content.body}</ReactMarkdown>
          </div>
          <div className={styles['footer-section']}>
            <div className={styles['tags-section']}>
              <div className={styles['tags-list']}>
                <div className={styles.title}>Tags</div>
                <div className={styles.tags}>
                  {articleRealTimeStory.tag_list.map((tag) => (
                    <div className={styles.tag} onClick={() => {}}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.shareable}>
                <div className={styles['share-icon']}>
                  <TwitterIcon />
                </div>
                <div className={styles['share-icon']}>
                  <FacebookIcon />
                </div>
                <div className={styles['share-icon']}>
                  <LinkInIcon />
                </div>
                <div className={styles['share-icon']}>
                  <EmailIcon />
                </div>
              </div>
            </div>
            <div className={styles['next-article']}>
              <div className={styles.title}>Next article</div>
              <div className={styles['article-title']}>
                {articleRealTimeStory.content.next_article.content.title}
              </div>
            </div>
          </div>
        </div>
        <div className={styles['right-section']}>
          <AuthorCard
            isSmall
            authorStory={articleRealTimeStory.content.author}
          />
          <div className={styles['relate-articles']}>
            <div className={styles.title}>Related posts</div>
            <div className={styles.articles}>
              {articleRealTimeStory.content.relate_articles.map(
                (article, index) => (
                  <BlogCardMapper article={article} index={index} />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleBlogPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  // the slug of the story
  const { articleSlug } = context.query
  const lang = context.locale
  const slug = `${lang === 'th' ? `${lang}/` : ''}`
  const defaultParam = {
    version: STORYBLOK_VERSION, // or 'published'
    cv: 0,
  }
  // the storyblok params

  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    defaultParam.version = STORYBLOK_VERSION
    // appends the cache version to get the latest content
    defaultParam.cv = Date.now()
  }

  const articlesStoryParams = {
    ...defaultParam,
    resolve_relations: articleRelation,
  }

  // loads the story from the Storyblok API
  const { data: articleStory } = await StoryblokAPIService.get(
    `cdn/stories/${slug}articles/${articleSlug}`,
    articlesStoryParams,
  )

  const articleDetailStory = await reloadArticleStoryblokRelational(
    articleStory.story,
    lang,
  )

  return {
    props: {
      articleStory: articleDetailStory,
      preview: context.preview || false,
    },
    // revalidate: 10,
  }
}
