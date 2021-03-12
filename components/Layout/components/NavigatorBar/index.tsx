import React from 'react'

import Logo from 'public/assets/images/logo.svg'
import styles from './index.module.scss'
import Menu from './components/Menu'
import BurgerMenu from './components/BurgerMenu'

const NavigatorBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.menu}>
        <div className={styles['on-left']}>
          <Menu isActive title="Exchange" />
          <Menu title="Blog" />
          <Menu title="About us" />
        </div>
        <div className={styles['on-right']}>
          <Menu title="Login" />
          <Menu isButton title="Register" />
          <Menu title="English/USD" />
        </div>
        <BurgerMenu />
      </div>
    </div>
  )
}

export default NavigatorBar
