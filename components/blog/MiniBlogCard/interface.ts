import { BlogAuthor } from '../../../interfaces/blog'
import { Tag } from '../../../interfaces/tag'
import { DateTime } from 'luxon'

export type MiniBlogCardProps = {
  tag: Tag
  title: string
  blogAuthor: BlogAuthor
  withProfilePhoto?: boolean
  handleOnPaginate: (index: number) => void
  index: number
}
