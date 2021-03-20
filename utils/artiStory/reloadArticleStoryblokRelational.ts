import { ArticleComponentType, ComponentQueryBase } from '../../interfaces/blog'
import { StoryblokAPIService } from '../../api/storyblokAPIService'
import { articleRelation } from '../../constants/storyblokRelational'

export const reloadArticleStoryblokRelational = async (
  story: ComponentQueryBase<ArticleComponentType>,
  lang: string | undefined,
) => {
  const defaultParam = {
    version: 'draft', // or 'published'
    cv: Date.now(),
  }

  const slug = `${lang === 'th' ? `${lang}/` : ''}`
  const articleSlug = `articles`
  const articleParams = {
    ...defaultParam,
    resolve_relations: articleRelation,
  }
  console.log('story.content.relate_articles', story.content)
  const relatesArticlesPromise = story.content.relate_articles.map(
    (article) => {
      return StoryblokAPIService.get(
        `cdn/stories/${slug}${articleSlug}/${article.slug}`,
        articleParams,
      )
    },
  )

  const relatesArticles = await Promise.all(relatesArticlesPromise)

  story.content.relate_articles = relatesArticles.map(
    (article) => article.data.story,
  )

  return story
}
