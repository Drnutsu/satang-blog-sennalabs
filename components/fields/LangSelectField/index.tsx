import React, { useState } from 'react'
import {
  CaretDownOutlined,
  CaretUpOutlined,
  GlobalOutlined,
} from '@ant-design/icons'
import { SelectFieldProps } from 'interfaces/fields'

import { useSelector } from 'react-redux'
import { configSelectors } from 'store/config'
import { language } from 'interfaces/lang'

import styles from './index.module.scss'
import { languageMapper } from '../../../constants/all'

const LangSelectField = ({ options }: SelectFieldProps) => {
  const [isShowOptions, setIsShowOptions] = useState(false)
  const currentLanguage: language = useSelector(configSelectors.language)

  const handleOnSelectLang = (langCode: string | number) => {
    console.log('select field: ', langCode)
  }

  return (
    <div className={styles.container}>
      <div
        role="button"
        tabIndex={-1}
        className={styles['select-field']}
        onClick={() => setIsShowOptions((oldValue) => !oldValue)}
      >
        <div>
          <GlobalOutlined />
        </div>
        <div className={styles.langName}>{languageMapper[currentLanguage]}</div>
        <div className={styles.icon}>
          {!isShowOptions ? <CaretDownOutlined /> : <CaretUpOutlined />}
        </div>
        <div className={`${styles.options} ${!isShowOptions && styles.hide} `}>
          {options.map((option) => (
            <div
              role="button"
              tabIndex={-1}
              onClick={() => handleOnSelectLang(option.value)}
              key={option.value}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LangSelectField
