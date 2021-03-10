import React from 'react'

import Logo from 'public/images/logo.svg'
import styles from './index.module.scss'
import Menu from './components/Menu'

const NavigatorBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.menu}>
        <div className={styles['on-left']}>
          <Menu isActive={true} title="Exchange" />
          <Menu isActive={false} title="Blog" />
          <Menu isActive={false} title="About us" />
        </div>
        <div className={styles['on-right']}>
          <Menu title="Login" />
          <Menu isButton title="Register" />
          <Menu title="English/USD" />
        </div>
      </div>
    </div>
  )
}

export default NavigatorBar
