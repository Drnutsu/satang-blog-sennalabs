import { HomePageQueryComponent } from '../../interfaces/blog'
import { StoryblokAPIService } from '../../api/storyblokAPIService'
import { articleRelation } from '../../constants/storyblokRelational'
import { STORYBLOK_VERSION } from '../../constants/env'

export const reloadStoryblokRelational = async (
  story: HomePageQueryComponent,
  lang: string | undefined,
) => {
  const defaultParam = {
    version: STORYBLOK_VERSION, // or 'published'
    cv: Date.now(),
  }

  const slug = `${lang === 'th' ? `${lang}/` : ''}`
  const articleSlug = `articles`
  const articleParams = {
    ...defaultParam,
    resolve_relations: articleRelation,
  }
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

  const highlightStoryParams = {
    ...defaultParam,
    excluding_ids: highlightArticles
      .map((article) => article.data.story.id)
      .join(','),
    per_page: 4,
    with_tag: 'highlight',
    starts_with: `${slug}articles`,
    resolve_relations: articleRelation,
  }

  console.log('highlightStoryParams', highlightStoryParams)

  // loads the story from the Storyblok API
  const { data: highlightStorySection } = await StoryblokAPIService.get(
    `cdn/stories`,
    highlightStoryParams,
  )

  console.log('highlightStorySection', highlightStorySection.stories[0].content.category)

  story.content.body[0].featured_articles = featuredArticles.map(
    (article) => article.data.story,
  )
  story.content.body[1].last_articles_top = lastThreeArticles.map(
    (article) => article.data.story,
  )
  story.content.body[1].highlight_section = [
    ...highlightArticles.map((article) => article.data.story),
    ...highlightStorySection.stories,
  ]

  story.content.body[1].top_article_section = topArticle.story

  return story
}
