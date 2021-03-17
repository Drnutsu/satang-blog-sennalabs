import {
  ArticleComponentType,
  ComponentQueryBase,
} from '../../../../../interfaces/blog'

export type LastArticleProps = {
  articles: ComponentQueryBase<ArticleComponentType>[]

  withPagination?: boolean
}
