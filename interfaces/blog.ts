import { StoryblokImage } from './storyblok/image'
import { DateTime } from 'luxon'

export type ContentBaseType = {
  alternates: any[]
  _uid: string
  component: string
  _editable: string
}

export interface AuthorComponentType extends ContentBaseType {
  about: string
  name: string
  photo: StoryblokImage
  position: string
}

export interface CategoryComponentType extends ContentBaseType {
  color: string
  title: string
}

export interface ArticleComponentType extends ContentBaseType {
  author: ComponentQueryBase<AuthorComponentType>
  category: ComponentQueryBase<CategoryComponentType>
  relate_articles: ComponentQueryBase<ArticleComponentType>[]
  next_article: ComponentQueryBase<ArticleComponentType>
  body: string
  component: string
  detail: string
  image: StoryblokImage
  intro: string
  title: string
  read_time: number
}

export interface HeroBannerContentType extends ContentBaseType {
  categories: ComponentQueryBase<CategoryComponentType>[]
  featured_articles: ComponentQueryBase<ArticleComponentType>[]
}

export interface HomeBodyContentType extends ContentBaseType {
  last_articles_top: ComponentQueryBase<ArticleComponentType>[]
  top_article_section: ComponentQueryBase<ArticleComponentType>
  highlight_section: ComponentQueryBase<ArticleComponentType>[]
}

export interface ComponentQueryBase<T> {
  content: T
  default_full_slug: string
  first_published_at: string
  full_slug: string
  group_id: string
  id: number
  is_startpage: boolean
  lang: string
  meta_data: any
  name: string
  parent_id: number
  path: string
  position: number
  published_at: string
  release_id: string
  slug: string
  sort_by_date: string
  tag_list: any[]
  translated_slugs: any[]
  uuid: string
}

export type Author = {
  name: string
  photoUrl: string
}

export interface BlogAuthor extends Author {
  readTime: number
  publicAt?: DateTime
}

export interface HomePageComponent extends ContentBaseType {
  body: [HeroBannerContentType, HomeBodyContentType]
}

export interface HomePageQueryComponent
  extends ComponentQueryBase<HomePageComponent> {}
