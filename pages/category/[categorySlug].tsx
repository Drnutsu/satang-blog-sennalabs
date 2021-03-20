import React from 'react'
import { GetServerSideProps } from 'next'
import BlogsList from 'components/blog/BlogsList'
import Pagination from 'components/Pagination'
import { StoryblokAPIService } from 'api/storyblokAPIService'
import { articleRelation } from 'constants/storyblokRelational'
import useStoryblok from 'hooks/storyblok'
import { CategoryComponentType, ComponentQueryBase } from 'interfaces/blog'

import styles from './index.module.scss'
import { CategotyBlogProps } from './interface'

const CategoryPage = ({ articleStories, categoryStory }: CategotyBlogProps) => {
  const categoryRealTimeStory: ComponentQueryBase<CategoryComponentType> = useStoryblok(
    { originalStory: categoryStory },
  )
  return (
    <div className={styles.container}>
      <div className={styles.title}>{categoryRealTimeStory.content.title}</div>
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

export default CategoryPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  // the slug of the story
  const { page = '1', categorySlug } = context.query
  const perPage = 9
  console.log('page:::', page)
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
  const { data: categoryStory } = await StoryblokAPIService.get(
    `cdn/stories/${slug}categories/${categorySlug}`,
    defaultParam,
  )

  console.log('categoryStory', categoryStory)

  const lastArticlesStoryParams = {
    ...defaultParam,
    sort_by: 'published_at',
    per_page: perPage,
    filter_query: {
      category: {
        like: categoryStory.story.uuid,
      },
    },
    page,
    starts_with: `${slug}articles`,
    resolve_relations: articleRelation,
  }

  // loads the story from the Storyblok API
  const { data: lastArticlesStories, headers } = await StoryblokAPIService.get(
    `cdn/stories`,
    lastArticlesStoryParams,
  )

  return {
    props: {
      categoryStory: categoryStory.story,
      articleStories: {
        page: Number(page),
        totalPage: Math.ceil(headers.total / perPage),
        stories: lastArticlesStories.stories,
      },
      preview: context.preview || false,
    },
    // revalidate: 10,
  }
}
