import React from 'react'

import Logo from 'public/assets/images/logo.svg'
import EmailIcon from 'public/assets/images/contract/email.svg'
import FacebookIcon from 'public/assets/images/contract/facebook.svg'
import TwitterIcon from 'public/assets/images/contract/twitter.svg'
import YoutubeIcon from 'public/assets/images/contract/youtube.svg'
import LineIcon from 'public/assets/images/contract/line.svg'
import InstagramIcon from 'public/assets/images/contract/instagram.svg'

import styles from './index.module.scss'
import FooterSection from './components/FooterSection'
import { useDeviceDetector } from '../../../../hooks/deviceDetector'
import LangSelectField from '../../../fields/LangSelectField'

const Footer = () => {
  const { isMobile } = useDeviceDetector()
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles['footer-grid']}>
          <div className={styles.logo}>
            <Logo />
          </div>

          <FooterSection
            title="About Us"
            menu={[
              { title: 'Company Profile', link: '/' },
              { title: 'Executive Summary', link: '/' },
              { title: 'Awards and Compliances', link: '/' },
              { title: 'Financial Statements', link: '/' },
              { title: 'Careers', link: '/' },
            ]}
          />
          <FooterSection
            title="Products"
            menu={[
              { title: 'Company Profile', link: '/' },
              { title: 'Executive Summary', link: '/' },
              { title: 'Awards and Compliances', link: '/' },
              { title: 'Financial Statements', link: '/' },
              { title: 'Careers', link: '/' },
            ]}
          />
          <FooterSection
            title="Service"
            menu={[
              { title: 'Company Profile', link: '/' },
              { title: 'Executive Summary', link: '/' },
              { title: 'Awards and Compliances', link: '/' },
              { title: 'Financial Statements', link: '/' },
              { title: 'Careers', link: '/' },
            ]}
          />
          <FooterSection
            title="Support"
            menu={[
              { title: 'Company Profile', link: '/' },
              { title: 'Executive Summary', link: '/' },
              { title: 'Awards and Compliances', link: '/' },
              { title: 'Financial Statements', link: '/' },
              { title: 'Careers', link: '/' },
            ]}
          />

          <div className={styles['contract-us']}>
            <div className={styles.topic}>Visit us</div>
            <div className={styles.icons}>
              <EmailIcon />
              <FacebookIcon />
              <TwitterIcon />
              <YoutubeIcon />
              <LineIcon />
              <InstagramIcon />
            </div>
          </div>
          {isMobile && (
            <div className={styles['switch-lang']}>
              <LangSelectField
                options={[
                  { label: 'English', value: 'en' },
                  { label: 'Thai', value: 'th' },
                ]}
                defaultValue="en"
              />
            </div>
          )}
        </div>
      </div>
      <div className={styles['copy-right-section']}>
        <div>Customer support tel.</div>
        <div>&nbsp;(+66) 20266107 (24/7 Service){!isMobile && ' | '}</div>
        <div>
          &nbsp; © 2017 - 2020 Satang.com. All rights reserved
          {!isMobile && ' | '}
        </div>
        {!isMobile && <div>&nbsp;Version. 352</div>}
      </div>
    </div>
  )
}

export default Footer
