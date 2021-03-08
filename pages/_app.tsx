import React from 'react'
import { Provider } from 'react-redux'
import type { AppProps /* , AppContext */ } from 'next/app'
import { store } from '../store'
import 'styles/index.scss'
import 'styles/antd.less'
import AppWrapper from './_app-wrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppWrapper Component={Component} pageProps={pageProps} />
    </Provider>
  )
}

export default MyApp
