import React from 'react'

import Logo from 'public/images/logo.svg'
import EmailIcon from 'public/images/contract/email.svg'
import FacebookIcon from 'public/images/contract/facebook.svg'
import TwitterIcon from 'public/images/contract/twitter.svg'
import YoutubeIcon from 'public/images/contract/youtube.svg'
import LineIcon from 'public/images/contract/line.svg'
import InstagramIcon from 'public/images/contract/instagram.svg'

import styles from './index.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles['footer-grid']}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles['footer-section']}>
          <div className={styles.topic}>About Us</div>
          <div className={`${styles.menu} ${styles['is-first']}`}>
            Company Profile
          </div>
          <div className={styles.menu}>Executive Summary</div>
          <div className={styles.menu}>Awards and Compliances</div>
          <div className={styles.menu}>Financial Statements</div>
          <div className={styles.menu}>Careers</div>
        </div>
        <div className={styles['footer-section']}>
          <div className={styles.topic}>About Us</div>
          <div className={`${styles.menu} ${styles['is-first']}`}>
            Company Profile
          </div>
          <div className={styles.menu}>Executive Summary</div>
          <div className={styles.menu}>Awards and Compliances</div>
          <div className={styles.menu}>Financial Statements</div>
          <div className={styles.menu}>Careers</div>
        </div>
        <div className={styles['footer-section']}>
          <div className={styles.topic}>About Us</div>
          <div className={`${styles.menu} ${styles['is-first']}`}>
            Company Profile
          </div>
          <div className={styles.menu}>Executive Summary</div>
          <div className={styles.menu}>Awards and Compliances</div>
          <div className={styles.menu}>Financial Statements</div>
          <div className={styles.menu}>Careers</div>
        </div>
        <div className={styles['footer-section']}>
          <div className={styles.topic}>About Us</div>
          <div className={`${styles.menu} ${styles['is-first']}`}>
            Company Profile
          </div>
          <div className={styles.menu}>Executive Summary</div>
          <div className={styles.menu}>Awards and Compliances</div>
          <div className={styles.menu}>Financial Statements</div>
          <div className={styles.menu}>Careers</div>
        </div>
        <div className={styles['contract-us']}>
          <div className={styles.topic}>About Us</div>
          <div className={styles.icons}>
            <EmailIcon />
            <FacebookIcon />
            <TwitterIcon />
            <YoutubeIcon />
            <LineIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
