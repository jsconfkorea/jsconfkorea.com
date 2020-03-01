import React from "react";
import { useTranslation } from 'react-i18next'

export default () => {
  const { t } = useTranslation()
  return (
    <div id="news-letter" className="hide">
      <div className="inner">
        <div id="news-letter-form">
          <p>{t('subscribe.description')}</p>
          <input
            id="email-input"
            type="email"
            placeholder="email address"
          />
          <div id="notice" className="hide">
            {t('subscribe.error_message')}
          </div>
          <button id="news-letter-submit">{t('subscribe.submit')}</button>
        </div>
      </div>
    </div>
  )
}