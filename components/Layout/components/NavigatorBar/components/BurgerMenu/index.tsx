import React from 'react'

import BurgerMenuIcon from 'public/assets/images/burger.svg'
import styles from './index.module.scss'

const BurgerMenu = () => {
  return (
    <div className={styles.container}>
      <BurgerMenuIcon />
    </div>
  )
}

export default BurgerMenu
