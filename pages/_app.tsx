import React from 'react'
import { Provider } from 'react-redux'
import type { AppContext, AppProps /* , AppContext */ } from 'next/app'
import NextApp from 'next/app'
import { DeviceDetectorProvider } from 'hooks/deviceDetector'

import { store } from '../store'
import 'styles/index.scss'
import 'styles/antd.less'

import AppWrapper from './_app-wrapper'

interface AppPropsWithUserAgent extends AppProps {
  userAgent: string
}

function MyApp({ Component, pageProps, userAgent }: AppPropsWithUserAgent) {
  return (
    <Provider store={store}>
      <DeviceDetectorProvider userAgent={userAgent}>
        <AppWrapper Component={Component} pageProps={pageProps} />
      </DeviceDetectorProvider>
    </Provider>
  )
}

export default MyApp

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext)
  console.log(' appContext : ', appContext)
  const userAgent: string =
    (appContext.ctx.req?.headers['user-agent'] as string) || 'SSR'
  // window.navigator.userAgent

  return { ...appProps, userAgent }
}
