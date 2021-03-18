import {
  ArticleComponentType,
  ComponentQueryBase,
} from '../../../interfaces/blog'

export type BlogsListProps = {
  articles: ComponentQueryBase<ArticleComponentType>[]
}
