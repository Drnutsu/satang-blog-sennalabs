import React from 'react'
import HeaderTag from 'components/tags/HeaderTag'

import styles from './index.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles['tag-suggestion']}>
        <HeaderTag isActive>ทั้งหมด</HeaderTag>
        <HeaderTag>เรืองไหม</HeaderTag>
        <HeaderTag>Editor's Pick</HeaderTag>
        <HeaderTag>bitCoin</HeaderTag>
        <HeaderTag>ethereum</HeaderTag>
        <HeaderTag>ข่าวสาร</HeaderTag>
        <HeaderTag>บทวิเคราะห์</HeaderTag>
        <HeaderTag>บทเขียนของเรา</HeaderTag>
      </div>
    </div>
  )
}

export default Header
