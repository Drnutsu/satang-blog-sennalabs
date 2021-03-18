import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { StoryblokAPIService } from 'api/storyblokAPIService'
import {
  ArticleComponentType,
  ComponentQueryBase,
  HomePageQueryComponent,
} from 'interfaces/blog'
import HomePage from 'components/pages/HomePage'
import useStoryblok from 'hooks/storyblok'
import { reloadStoryblokRelational } from 'utils/homeStory/reloadStoryblokRelational'
import {
  articleRelation,
  homeRelational,
} from '../constants/storyblokRelational'

const IndexPage = ({
  story,
  lastArticlesStories,
}: {
  story: HomePageQueryComponent
  lastArticlesStories: {
    page: number
    totalPage: number
    stories: ComponentQueryBase<ArticleComponentType>[]
  }
}) => {
  const homeQueryRelation = [
    'HeroBanner.categories',
    'HeroBanner.featured_articles',
    'HomeBody.top_article_section',
    'HomeBody.last_articles_top',
    'HomeBody.highlight_section',
  ]
  const homeStory: HomePageQueryComponent = useStoryblok(
    story,
    homeQueryRelation,
    reloadStoryblokRelational,
  )

  return (
    <div>
      <Head>
        <title>Satang Blogs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage
          contentBody={homeStory.content}
          lastArticlesStories={lastArticlesStories}
        />
      </main>
    </div>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  // the slug of the story
  const { page = '1' } = context.query
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

  const homePageStoryParams = {
    ...defaultParam,
    resolve_relations: homeRelational,
  }

  // loads the story from the Storyblok API
  const { data: homePageStory } = await StoryblokAPIService.get(
    `cdn/stories/${slug}home`,
    homePageStoryParams,
  )

  const lastArticlesStoryParams = {
    ...defaultParam,
    sort_by: 'published_at',
    per_page: perPage,
    page,
    starts_with: `${slug}articles`,
    resolve_relations: articleRelation,
  }

  // loads the story from the Storyblok API
  const { data: lastArticlesStories, headers } = await StoryblokAPIService.get(
    `cdn/stories`,
    lastArticlesStoryParams,
  )

  const homeStory = await reloadStoryblokRelational(homePageStory.story, lang)

  return {
    props: {
      story: homePageStory ? homeStory : false,
      lastArticlesStories: {
        page: Number(page),
        totalPage: Math.ceil(headers.total / perPage),
        stories: lastArticlesStories.stories,
      },
      preview: context.preview || false,
    },
    // revalidate: 10,
  }
}
