import React, { useRef, useState } from 'react'
import { BannerHeroProps, SliderArticle, SliderRefs } from './interface'
import { HeroBannerContentType } from '../../../../../../interfaces/blog'

export const withSlider = (
  Component: ({
    sliderArticles,
    handleOnPaginate,
    currentActivePage,
    bannerContent,
  }: BannerHeroProps) => any,
) => {
  const Hoc = ({ bannerContent }: { bannerContent: HeroBannerContentType }) => {
    const [currentActivePage, setCurrentActivePage] = useState(0)
    const sliderParentRef = useRef() as React.MutableRefObject<HTMLInputElement>
    const sliderArticleRef1 = useRef() as React.MutableRefObject<HTMLInputElement>
    const sliderArticleRef2 = useRef() as React.MutableRefObject<HTMLInputElement>
    const sliderArticleRef3 = useRef() as React.MutableRefObject<HTMLInputElement>
    const sliderRefs = {
      sliderArticleRef1,
      sliderArticleRef2,
      sliderArticleRef3,
    }
    const refSwitcher = (index: number): SliderRefs => {
      switch (index) {
        case 0:
          return 'sliderArticleRef1'
        case 1:
          return 'sliderArticleRef2'
        case 2:
          return 'sliderArticleRef3'
        default:
      }
    }

    const sliderArticles: SliderArticle[] = [
      {
        intro: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Parturient habitant enim, diam accumsan, urna. Viverra
                  pellentesque dolor, lacus viverra sed nulla justo.`,
        tag: { color: 'green', title: 'ethereum' },
        title: ' A Leap In Using Silicon For Battery Anodes',
      },
      {
        intro: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Parturient habitant enim, diam accumsan, urna. Viverra
                  pellentesque dolor, lacus viverra sed nulla justo.`,
        tag: { color: 'green', title: 'ethereum' },
        title: ' A Leap In Using Silicon For Battery Anodes',
      },
      {
        intro: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Parturient habitant enim, diam accumsan, urna. Viverra
                  pellentesque dolor, lacus viverra sed nulla justo.`,
        tag: { color: 'green', title: 'ethereum' },
        title: ' A Leap In Using Silicon For Battery Anodes',
      },
    ]

    const handleOnPaginate = (activePageIndex: number) => {
      const key = refSwitcher(activePageIndex)

      sliderParentRef.current.scroll({
        left:
          sliderRefs[key!].current.offsetLeft -
          sliderParentRef.current.offsetLeft,
      })

      setCurrentActivePage(activePageIndex)
    }

    const pageProps: BannerHeroProps = {
      currentActivePage,
      sliderArticles,
      handleOnPaginate,
      refSwitcher,
      sliderRefs,
      sliderParentRef,
      bannerContent,
    }
    return <Component {...pageProps} />
  }

  return Hoc
}
