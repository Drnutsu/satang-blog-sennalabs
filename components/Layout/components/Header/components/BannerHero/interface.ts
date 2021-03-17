import { Tag } from '../../../../../../interfaces/tag'
import { RefObject } from 'react'
import { HeroBannerContentType } from '../../../../../../interfaces/blog'

export type SliderArticle = {
  tag: Tag
  title: string
  intro: string
}

export interface BannerHeroProps {
  sliderArticles: SliderArticle[]
  bannerContent: HeroBannerContentType
  handleOnPaginate: (activePageIndex: number) => void
  currentActivePage: number
  sliderRefs: {
    sliderArticleRef1: RefObject<HTMLDivElement>
    sliderArticleRef2: RefObject<HTMLDivElement>
    sliderArticleRef3: RefObject<HTMLDivElement>
  }
  sliderParentRef: RefObject<HTMLDivElement>
  refSwitcher: (index: number) => SliderRefs
}

export type SliderRefs =
  | 'sliderArticleRef1'
  | 'sliderArticleRef2'
  | 'sliderArticleRef3'
