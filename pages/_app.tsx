import React from 'react'
import { Provider } from 'react-redux'
import type { AppContext, AppProps /* , AppContext */ } from 'next/app'
import NextApp from 'next/app'
import { DeviceDetectorProvider } from 'hooks/deviceDetector'

import { store } from '../store'
import 'styles/index.scss'
import 'styles/antd.less'

import AppWrapper from './_app-wrapper'
import { StoryblokAPIService } from '../api/storyblokAPIService'
import { CategoriesProvider } from '../hooks/categories'
import { CategoryComponentType, ComponentQueryBase } from '../interfaces/blog'

interface AppPropsWithUserAgent extends AppProps {
  userAgent: string
  categoryStories: ComponentQueryBase<CategoryComponentType>[]
}

function MyApp({
  Component,
  pageProps,
  userAgent,
  categoryStories,
}: AppPropsWithUserAgent) {
  return (
    <Provider store={store}>
      <DeviceDetectorProvider userAgent={userAgent}>
        <CategoriesProvider categories={categoryStories}>
          <AppWrapper Component={Component} pageProps={pageProps} />
        </CategoriesProvider>
      </DeviceDetectorProvider>
    </Provider>
  )
}

export default MyApp

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext)

  const userAgent: string =
    (appContext.ctx.req?.headers['user-agent'] as string) ??
    window.navigator.userAgent

  // the slug of the story
  const lang = appContext.router.locale
  const slug = `${lang === 'th' ? `${lang}/` : ''}`
  const defaultParam = {
    version: 'draft', // or 'published'
    cv: Date.now(),
  }

  const categoriesStoryParams = {
    ...defaultParam,
    sort_by: 'published_at',
    starts_with: `${slug}categories`,
  }
  // loads the story from the Storyblok API
  const { data: categoryStories } = await StoryblokAPIService.get(
    `cdn/stories`,
    categoriesStoryParams,
  )

  return { ...appProps, userAgent, categoryStories: categoryStories.stories }
}
