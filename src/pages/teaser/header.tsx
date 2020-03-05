import React, { useState, useMemo } from 'react';
import Link from '../../i18n/Link'
import Header from './styles/header'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export default () => {
  const [showHeader, setShowHeader] = useState("hide");

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (prevPos.y !== currPos.y) {
        if (currPos.y === 0) {
          setShowHeader("hide");
        } else {
          setShowHeader("");
        }
      }
    },
    [showHeader]
  )


  return (
    <Header id="header" className={showHeader}>
        <h1>
          <a>JSCONF KOREA 2020</a>
        </h1>
        <div id="lang-btn">
          <Link lang="en">EN</Link> / <Link lang="ko">KR</Link>
        </div>
    </Header>
  )
}

