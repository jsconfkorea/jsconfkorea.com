import React, { useEffect, useState } from 'react'
import Link from '../../i18n/Link'
import { useTranslation } from 'react-i18next'
import { Footer } from './styles'

export default () => {
  const { t } = useTranslation()
  const [showFooter, setShowFooter] = useState("hide");

  useEffect(() => {
    setShowFooter("");
  }, [])

  return (
    <Footer className={showFooter}>
      <ul id="footer-first" className="float-left">
        <li>
          <Link to={'/code-of-conduct'}>{t('code_of_conduct')}</Link>
        </li>
        <li>
          <Link to={'/privacy-policy'}>{t('privacy_policy')}</Link>
        </li>
      </ul>
      <div id="footer-second" className="float-right">
        <a id="email" href="mailto:contact@jsconfkorea.com">
          contact@jsconfkorea.com
        </a>
        <div className="social-link-container">
        <a
          className="social-link"
          href="https://github.com/jsconfkorea"
          target="_blank"
        >
          <span className="desktop">
            <img alt="github icon" src="icon-github-white.svg" />
          </span>
          <span className="mobile">
            <img alt="github icon" src="icon-github.svg" />
          </span>
        </a>
        <a
          className="social-link"
          href="https://www.instagram.com/jsconf.korea/"
          target="_blank"
        >
          <span className="desktop">
            <img alt="instagram icon" src="icon-instagram-white.svg" />
          </span>
          <span className="mobile">
            <img alt="instagram icon" src="icon-instagram.svg" />
          </span>
        </a>
        <a
          className="social-link"
          href="https://twitter.com/jsconfkorea"
          target="_blank"
        >
          <span className="desktop">
            <img alt="twitter icon" src="icon-twitter-white.svg" />
          </span>
          <span className="mobile">
            <img alt="twitter icon" src="icon-twitter.svg" />
          </span>
        </a>
        <a
          className="social-link"
          href="https://www.facebook.com/jsconfkorea/"
          target="_blank"
        >
          <span className="desktop">
            <img alt="facebook icon" src="icon-facebook-white.svg" />
          </span>
          <span className="mobile">
            <img alt="facebook icon" src="icon-facebook.svg" />
          </span>
        </a>
      </div>
        </div>
    </Footer>
  )
}