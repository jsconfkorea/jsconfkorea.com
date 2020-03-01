import React, { useRef } from "react";
import Link from '../../i18n/Link'

export default () => {
  const header = useRef<HTMLDivElement>(null)
  return (
    <header id="header" ref={header} className="hide">
      <h1>
        <a>JSCONF KOREA 2020</a>
      </h1>
      <div id="lang-btn">
        <Link lang="en">EN</Link> / <Link lang="ko">KR</Link>
      </div>
    </header>
  )
}