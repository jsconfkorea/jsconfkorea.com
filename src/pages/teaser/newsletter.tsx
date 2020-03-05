import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
import { NewsLetter } from './styles';

type Props = {
  showNewsLetter: string,
  toggleNewsLetter: Function
}
export default ({ showNewsLetter, toggleNewsLetter} : Props) => {
  const { t } = useTranslation()
  const handleOnClick = () => {
    toggleNewsLetter(false)
  }
  return (
    <NewsLetter className={showNewsLetter}>
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
          <button id="news-letter-submit" onClick={ handleOnClick }>{t('subscribe.submit')}</button>
        </div>
      </div>
    </NewsLetter>
  )
}