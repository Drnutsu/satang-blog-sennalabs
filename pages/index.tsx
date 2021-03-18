import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { StoryblokAPIService } from 'api/storyblokAPIService'
// import DynamicComponent from 'components/DynamicComponent'

import { HomePageQueryComponent } from '../interfaces/blog'
// import useStoryblok from '../hooks/storyblok'
import HomePage from '../components/pages/HomePage'

const IndexPage = ({ story }: { story: HomePageQueryComponent }) => {
  // const storyy:HomePageQueryComponent = useStoryblok(story)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage contentBody={story.content} />
      </main>
    </div>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  // the slug of the story
  const lang = context.locale
  const slug = `${lang === 'th' ? `${lang}/` : ''}`
  // the storyblok params
  const params = {
    version: 'draft', // or 'published'
    cv: 0,
    resolve_relations:
      'HeroBanner.categories,HeroBanner.featured_articles,HomeBody.top_article_section,HomeBody.last_articles_top,HomeBody.highlight_section',
  }

  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = 'draft'
    // appends the cache version to get the latest content
    params.cv = Date.now()
  }

  // loads the story from the Storyblok API
  const { data } = await StoryblokAPIService.get(
    `cdn/stories/${slug}home`,
    params,
  )
  // return the story from Storyblok and whether preview mode is active

  const articleSlug = `articles`
  const articleParams = {
    version: 'draft', // or 'published'
    cv: 0,
    resolve_relations: 'article.author,article.category',
  }
  const { story }: { story: HomePageQueryComponent } = data
  const featuredArticlesPromise = story.content.body[0].featured_articles.map(
    (article) => {
      return StoryblokAPIService.get(
        `cdn/stories/${slug}${articleSlug}/${article.slug}`,
        articleParams,
      )
    },
  )

  const lastThreeArticlesPromise = story.content.body[1].last_articles_top.map(
    (article) => {
      return StoryblokAPIService.get(
        `cdn/stories/${slug}${articleSlug}/${article.slug}`,
        articleParams,
      )
    },
  )

  const highlightArticlesPromise = story.content.body[1].highlight_section.map(
    (article) => {
      return StoryblokAPIService.get(
        `cdn/stories/${slug}${articleSlug}/${article.slug}`,
        articleParams,
      )
    },
  )

  const topArticleSlug = story.content.body[1].top_article_section.slug
  const { data: topArticle } = await StoryblokAPIService.get(
    `cdn/stories/${slug}${articleSlug}/${topArticleSlug}`,
    articleParams,
  )

  const featuredArticles = await Promise.all(featuredArticlesPromise)
  const lastThreeArticles = await Promise.all(lastThreeArticlesPromise)
  const highlightArticles = await Promise.all(highlightArticlesPromise)

  story.content.body[0].featured_articles = featuredArticles.map(
    (article) => article.data.story,
  )
  story.content.body[1].last_articles_top = lastThreeArticles.map(
    (article) => article.data.story,
  )
  story.content.body[1].highlight_section = highlightArticles.map(
    (article) => article.data.story,
  )

  story.content.body[1].top_article_section = topArticle.story

  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
    },
    // revalidate: 10,
  }
}
