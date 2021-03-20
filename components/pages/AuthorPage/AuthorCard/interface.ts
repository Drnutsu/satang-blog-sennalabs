import { AuthorComponentType, ComponentQueryBase } from 'interfaces/blog'

export type AuthorCardProps = {
  authorStory: ComponentQueryBase<AuthorComponentType>
  isSmall?: boolean
}
