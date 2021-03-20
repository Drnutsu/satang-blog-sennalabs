import React from 'react'
import { GetServerSideProps } from 'next'

import styles from './index.module.scss'
import AuthorCard from './components/AuthorCard'
import Pagination from '../../components/Pagination'
import { StoryblokAPIService } from '../../api/storyblokAPIService'
import { articleRelation } from '../../constants/storyblokRelational'
import BlogsList from '../../components/blog/BlogsList'
import { AuthorBlogPageProps } from './interface'
import { AuthorComponentType, ComponentQueryBase } from '../../interfaces/blog'
import useStoryblok from '../../hooks/storyblok'

const AuthorBlogPage = ({
  articleStories,
  authorStory,
}: AuthorBlogPageProps) => {
  const authorRealTimeStory: ComponentQueryBase<AuthorComponentType> = useStoryblok(
    { originalStory: authorStory },
  )
  return (
    <div className={styles.container}>
      <div className={styles.title}>Published by Author</div>
      <AuthorCard authorStory={authorRealTimeStory} />
      <BlogsList articles={articleStories.stories} />
      <div className={styles.pagination}>
        <Pagination
          page={articleStories.page}
          totalPage={articleStories.totalPage}
        />
      </div>
    </div>
  )
}

export default AuthorBlogPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  // the slug of the story
  const { page = '1', authorSlug } = context.query
  const perPage = 9
  const lang = context.locale
  const slug = `${lang === 'th' ? `${lang}/` : ''}`
  const defaultParam = {
    version: 'draft', // or 'published'
    cv: 0,
  }
  // the storyblok params

  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    defaultParam.version = 'draft'
    // appends the cache version to get the latest content
    defaultParam.cv = Date.now()
  }

  // loads the story from the Storyblok API
  const { data: authorStory } = await StoryblokAPIService.get(
    `cdn/stories/${slug}authors/${authorSlug}`,
    defaultParam,
  )

  const articlesStoryParams = {
    ...defaultParam,
    sort_by: 'published_at',
    per_page: perPage,
    filter_query: {
      author: {
        like: authorStory.story.uuid,
      },
    },
    page,
    starts_with: `${slug}articles`,
    resolve_relations: articleRelation,
  }

  // loads the story from the Storyblok API
  const { data: articlesStories, headers } = await StoryblokAPIService.get(
    `cdn/stories`,
    articlesStoryParams,
  )

  return {
    props: {
      authorStory: authorStory.story,
      articleStories: {
        page: Number(page),
        totalPage: Math.ceil(headers.total / perPage),
        stories: articlesStories.stories,
      },
      preview: context.preview || false,
    },
    // revalidate: 10,
  }
}
