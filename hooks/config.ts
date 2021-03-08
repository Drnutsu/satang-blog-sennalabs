import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { configActions, configSelectors } from 'store/config'
import { useRouter } from 'next/router'

export default function useConifg() {
  const dispatch = useDispatch()
  const language: 'th' | 'en' = useSelector(configSelectors.language)
  const currency = useSelector(configSelectors.currency)
  const router = useRouter()

  const updateLanguage = useCallback(
    (newLanguage) => {
      dispatch(
        configActions.update.language({
          oldLanguage: language,
          language: newLanguage,
        }),
      )
    },
    [dispatch, language],
  )

  const switchLanguage = useCallback(
    (newLanguage) => {
      // eslint-disable-next-line
      typeof window !== 'undefined' &&
        router.replace(
          `/${newLanguage}${router.pathname}`,
          `/${newLanguage}${router.asPath}`,
          {
            locale: newLanguage,
          },
        )
    },
    [router],
  )

  const switchCurrency = useCallback(
    (newCurrency) => {
      dispatch(configActions.update.currency(newCurrency))
    },
    [dispatch],
  )

  return [
    {
      language,
      currency,
    },
    {
      switchLanguage,
      updateLanguage,
      switchCurrency,
    },
  ]
}
