import React from 'react'
import { useRouter } from 'next/router'

import styles from './index.module.scss'
import { HeaderTagProps } from './interface'

const HeaderTag = ({ children, isActive, link, slug }: HeaderTagProps) => {
  const { push } = useRouter()
  const handleOnClick = () => {
    push(link || `/category/${slug}`)
  }

  return (
    <div
      role="button"
      tabIndex={-1}
      onClick={handleOnClick}
      className={`${styles.container} ${isActive && styles['is-active']}`}
    >
      {children}
    </div>
  )
}

export default HeaderTag
