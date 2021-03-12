import React from 'react'
import styles from './index.module.scss'
import { HeaderTagProps } from './interface'

const HeaderTag = ({ children, isActive }: HeaderTagProps) => {
  return (
    <div className={`${styles.container} ${isActive && styles['is-active']}`}>
      {children}
    </div>
  )
}

export default HeaderTag
