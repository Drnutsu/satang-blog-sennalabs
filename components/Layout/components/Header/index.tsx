import React from 'react'
import HeaderTag from 'components/tags/HeaderTag'

import styles from './index.module.scss'
import { useCategories } from '../../../../hooks/categories'

const Header = () => {
  const { categories } = useCategories()
  return (
    <div className={styles.container}>
      <div className={styles['tag-suggestion']}>
        <HeaderTag isActive>ทั้งหมด</HeaderTag>
        {categories.map((category) => (
          <HeaderTag>{category.content.title}</HeaderTag>
        ))}
      </div>
    </div>
  )
}

export default Header
