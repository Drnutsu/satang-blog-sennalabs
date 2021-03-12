import React from 'react'
import type { AppProps /* , AppContext */ } from 'next/app'
import i18nMessages from 'constants/i18n'
import { IntlProvider } from 'react-intl'
import useConfig from 'hooks/config'
import { supportedLanguagesMap } from 'utils/language'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

export default function AppWrapper({
  Component,
  pageProps,
}: {
  Component: AppProps['Component']
  pageProps: AppProps['pageProps']
}) {
  const router = useRouter()
  const newLang = router.locale
  const [{ language }, { switchLanguage, updateLanguage }] = useConfig()
  const lang =
    typeof window !== 'undefined'
      ? window.location.pathname.split('/')[1] || 'en'
      : ''
  if (!supportedLanguagesMap[lang]) {
    // if language isn't defined from url, it will auto redirect from language in persist
    if (switchLanguage) {
      switchLanguage(language)
    }
  } else if (lang !== language) {
    // if language is defined from url, it will follow by url and persist
    if (updateLanguage) {
      updateLanguage(newLang)
    }
  }
  const messages = i18nMessages[language!]
    ? i18nMessages[language!]
    : i18nMessages.en

  return (
    <IntlProvider locale={language!} messages={messages}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  )
}
