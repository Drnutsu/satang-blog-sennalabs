import { ArticleComponentType, ComponentQueryBase } from '../blog'

export type ArticleStories = {
  page?: number
  totalPage?: number
  stories: ComponentQueryBase<ArticleComponentType>[]
}
