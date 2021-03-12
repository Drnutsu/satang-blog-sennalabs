import { BlogAuthor } from '../../../interfaces/blog'
import { Tag } from '../../../interfaces/tag'

export type BlogCardProps = {
  tag: Tag
  title: string
  intro: string
  blogAuthor: BlogAuthor
  isBlue?: boolean
  isNoIntro?: boolean
  isNoImage?: boolean
}
