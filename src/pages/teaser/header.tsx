import React, { useState, useMemo } from 'react';
import Link from '../../i18n/Link'
import { Header } from './styles'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export default () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y === 55
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll]
  )

  const resolveClassName = () => {
    return hideOnScroll ? 'hide' : ''
  }

  return (
    <Header id="header" className={resolveClassName()}>
        <h1>
          <a>JSCONF KOREA 2020</a>
        </h1>
        <div id="lang-btn">
          <Link lang="en">EN</Link> / <Link lang="ko">KR</Link>
        </div>
    </Header>
  )
}

