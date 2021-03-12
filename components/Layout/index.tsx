import React from 'react'
import styles from './index.module.scss'
import { LayoutProps } from './interface'
import NavigatorBar from './components/NavigatorBar'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <NavigatorBar />
      <Header />
      <div className={styles.body}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
