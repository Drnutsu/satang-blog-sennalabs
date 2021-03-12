import React, { useState } from 'react'
import Link from 'next/link'
import { RightOutlined, DownOutlined } from '@ant-design/icons'

import styles from './index.module.scss'
import { FooterSectionProps } from './interface'
import { useDeviceDetector } from '../../../../../../hooks/deviceDetector'

const FooterSection = ({ title, menu }: FooterSectionProps) => {
  const { isMobile } = useDeviceDetector()
  const [isShow, setIsShow] = useState(!isMobile)

  const onClickTitle = () => {
    if (isMobile) setIsShow((oldValue) => !oldValue)
  }
  return (
    <div className={styles.container}>
      <div
        className={styles.title}
        role="button"
        tabIndex={-1}
        onClick={onClickTitle}
      >
        <div className={styles['title-text']}> {title}</div>
        {isMobile && (
          <div className={styles['title-nav']}>
            {isShow ? <DownOutlined /> : <RightOutlined />}
          </div>
        )}
      </div>
      {isShow && (
        <div className={styles['grid-content']}>
          {menu.map((item, index) => (
            <div
              className={`${styles.menu} ${index === 0 && styles['is-first']}`}
            >
              <Link href={item.link}>{item.title}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FooterSection
