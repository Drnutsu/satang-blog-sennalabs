import { Tag } from '../../../../interfaces/tag'
import { BlogAuthor } from '../../../../interfaces/blog'

export type MiddleContentProps = {
  tag: Tag
  blogAuthor: BlogAuthor
  title: string
  slug: string
}
