import React from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'
import { configActions, configSelectors } from '../../store/config'

export default function Contact() {
  const dispatch = useDispatch()
  const currency = useSelector(configSelectors.currency)
  const ford = (): void => {
    dispatch(configActions.update.currency('ford'))
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Satang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.div1}>
        <div
          className="child1"
          onClick={() => {
            ford()
          }}
          role="button"
          tabIndex={0}
        >
          Currency {currency}
        </div>
        <div className="child1">Test Child1</div>
        <div className="child2">Test Child2</div>
      </div>
    </div>
  )
}
