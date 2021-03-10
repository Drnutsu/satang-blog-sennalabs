import { BlogAuthor } from '../../../interfaces/blog'
import { Tag } from '../../../interfaces/tag'

export type MiniBlogCardProps = {
  tag: Tag
  title: string
  blogAuthor: BlogAuthor
  withProfilePhoto?: boolean
}
