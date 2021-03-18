import { AuthorComponentType, ComponentQueryBase } from '../../interfaces/blog'
import { ArticlesProps } from '../../components/pages/HomePage/components/LastArticles/interface'

export interface AuthorBlogPageProps extends ArticlesProps {
  authorStory: ComponentQueryBase<AuthorComponentType>
}
