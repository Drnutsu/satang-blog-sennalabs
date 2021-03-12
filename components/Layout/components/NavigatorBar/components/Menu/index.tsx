import React from 'react'
import styles from './index.module.scss'
import { MenuProps } from './interface'

const Menu = ({ isActive, title, isButton }: MenuProps) => {
  return (
    <div
      className={`${styles.container} ${isActive && styles['is-active']} ${
        isButton && styles['is-button']
      }`}
    >
      {title}
    </div>
  )
}

export default Menu
