import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'
import { Menu } from './styles'

type Props = {
  toggleNewsLetter: Function
}

export default ({ toggleNewsLetter } : Props) => {
  const { t } = useTranslation()
  const [showNewsLetter, setShowNewsLetter] = useState(false);
  const handleOnClick = () => {
    setShowNewsLetter(!showNewsLetter)
    toggleNewsLetter(!showNewsLetter)
  }

  {/* .menu-button 의 hide 클래스 빼두었습니다 */}
  {/* #menu-container 가 추가 되었어요 */}
  return (
    <Menu>
      <ul id="menu">
        <li>
          <a className="menu-button"><span>{t('look_back_2019')}</span></a>
          <div className="side">
            <a href="https://jsconfkorea.com/" target="_blank">
              <span>{t('website')}</span>
            </a>
            <a
              href="https://www.youtube.com/watch?v=hbsIOHktvfo&list=PL37ZVnwpeshGanWnYhTdoFLM2IDF28MaQ"
              target="_blank"
            >
              <span>{t('video')}</span>
            </a>
          </div>
        </li>
        <li>
          <a className="menu-button"><span>{t('call_for_proposals')}</span></a>
        </li>
        <li>
          <a className="menu-button"><span>{t('sponsor')}</span></a>
        </li>
        <li onClick = { handleOnClick }>
          <button className="menu-button"><span>{t('newsletter')}</span></button>
        </li>
      </ul>
    </Menu>
  )
}