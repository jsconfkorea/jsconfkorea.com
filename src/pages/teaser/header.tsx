import React, { useState, useMemo } from 'react';
import Link from '../../i18n/Link'
import Header from './styles/header'

type Props = {
  className: string
}

export default ({ className }: Props) => {
  return (
    <Header id="header" className={className}>
        <h1>
          <a>JSCONF KOREA 2020</a>
        </h1>
        <div id="lang-btn">
          <Link lang="en">EN</Link> / <Link lang="ko">KR</Link>
        </div>
    </Header>
  )
}

