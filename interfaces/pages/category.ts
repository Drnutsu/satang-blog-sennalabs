import { ArticlesProps } from '../../components/pages/HomePage/components/LastArticles/interface'
import {
  CategoryComponentType,
  ComponentQueryBase,
} from '../blog'

export interface CategotyBlogProps extends ArticlesProps {
  categoryStory: ComponentQueryBase<CategoryComponentType>
}
