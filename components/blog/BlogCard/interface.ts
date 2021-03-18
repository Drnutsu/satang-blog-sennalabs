import {
  ArticleComponentType,
  BlogAuthor,
  ComponentQueryBase,
} from '../../../interfaces/blog'
import { Tag } from '../../../interfaces/tag'

export type BlogCardProps = {
  tag: Tag
  title: string
  intro: string
  blogAuthor: BlogAuthor
  isBlue?: boolean
  isNoIntro?: boolean
  isNoImage?: boolean
  image: string
}

export type BlogCardMapperProps = {
  article: ComponentQueryBase<ArticleComponentType>
  index?: number
  isBlue?: boolean
}
