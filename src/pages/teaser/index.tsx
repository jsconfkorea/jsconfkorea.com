import React, { useEffect, useCallback, useRef } from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import Helmet from 'react-helmet'
import { useTranslation } from 'react-i18next'
import Link from '../../i18n/Link'
import emotionReset from 'emotion-reset'
import useScript from '../../hooks/useScript'
import { withPrefix } from 'gatsby'

export default () => {
  const { t } = useTranslation()
  const container = useRef<HTMLDivElement>(null)
  const header = useRef<HTMLDivElement>(null)
  const intro = useRef<HTMLDivElement>(null)
  const menu = useRef(null)
  const footer = useRef<HTMLDivElement>(null)

  const onScroll = useCallback(e => {
    const scrollY = e.target.scrollTop
    const innerHeight = e.target.clientHeight
    const scale =
      scrollY / innerHeight > 1 ? 1 : (scrollY / innerHeight) * 0.075
    intro.current!.style.transform =
      'translateY(' +
      -scrollY * 0.1 +
      'px) translateZ(0) scale(' +
      (1 - scale) +
      ')'
  }, [])
  
  useScript('/p5/graphic.min.js', () => {
    document.querySelector('canvas')!.remove()
    // console.log('remove!')
  })
  useScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.min.js')

  useEffect(() => {
    intro.current!.classList.remove('hide')
    footer.current!.classList.remove('hide')
    if (innerWidth <= 1024) {
      document.querySelectorAll('.menu-button').forEach(elem => {
        elem.classList.remove('hide')
      })
    }
  }, [])

  return (
    <>
      <Global styles={style} />
      <Style
        id="container-main"
        className="container"
        ref={container}
        onScroll={onScroll}
      >
        <header id="header" ref={header} className="hide">
          <h1>
            <a>JSCONF KOREA 2020</a>
          </h1>
          <div id="lang-btn">
            <Link lang="en">EN</Link> / <Link lang="ko">KR</Link>
          </div>
        </header>

        <div id="intro" className="hide" ref={intro}>
          <h2>
            <div className="line">
              <div className="inner">
                <span>JSCONF</span>
              </div>
            </div>
            <div className="line">
              <div className="inner">
                <span>KOREA</span>
              </div>
            </div>
            <div className="line">
              <div className="inner">
                <span>2020</span>
              </div>
            </div>
          </h2>
        </div>

        <ul id="menu" ref={menu}>
          <li>
            <a className="menu-button hide">{t('look_back_2019')}</a>
            <div className="side">
              <a href="https://jsconfkorea.com/" target="_blank">
                {t('website')}
              </a>
              <a
                href="https://www.youtube.com/watch?v=hbsIOHktvfo&list=PL37ZVnwpeshGanWnYhTdoFLM2IDF28MaQ"
                target="_blank"
              >
                {t('video')}
              </a>
            </div>
          </li>
          <li>
            <a className="menu-button hide">{t('call_for_proposals')}</a>
          </li>
          <li>
            <a className="menu-button hide">{t('sponsor')}</a>
          </li>
          <li>
            <button className="menu-button hide">{t('newsletter')}</button>
          </li>
        </ul>
        <footer ref={footer}>
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
        </footer>
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
      </Style>
    </>
  )
}

const style = css`
  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    user-select: none;
  }
  html,
  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
    letter-spacing: -0.1em;
  }
  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    overflow: hidden;
    height: 100%;
    /* position: relative; */
    /* min-height: 100vh; */
    /* min-height: calc(var(--vh, 1vh) * 100); */
  }
  body::-webkit-scrollbar {
    display: none;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  .p5Canvas {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9;
  }
`

const Style = styled.div`
  overflow-x: hidden;
  overflow-y: auto;

  height: 100%;
  background: #2524ee;
  /* padding-bottom: 50px; */
  /* padding-top: calc(100% + 50px); */

  scrollbar-width: none;

  @media screen and (max-width: 1023px) {
    padding-top: 0;
    padding-bottom: 0;
    background: white;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.2;
      background-size: 150px;
      background-image: url(/texture.png);
      pointer-events: none;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 100%;
    height: auto;
  }

  /* 모바일용 요소 */
  .mobile {
    display: none;
  }

  /* 요소 좌우정렬 */
  .float-left {
    float: left;
  }
  .float-right {
    float: right;
  }

  /* 텍스쳐 */
  #intro:after,
  #menu:after,
  header:after,
  footer:after,
  .doc-container:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
    background-size: 150px;
    background-image: url(/texture.png);
    pointer-events: none;
  }

  /* 컨테이너 */

  .doc-container {
    background: white;
  }

  /* 스크롤바 숨김 */

  /* 헤더 푸터 */
  header,
  footer {
    position: fixed;
    left: 0;
    right: 0;
    background: #2524ee;
    padding: 0 25px;
    height: 50px;
    color: #fff;
    z-index: 1;
  }

  /* 헤더 */
  header {
    top: 0;
    border-bottom: solid 5px #fff;
    transform: translateY(0);
    transition: transform 0.3s;
  }
  header.hide {
    transform: translateY(-55px);
  }
  header h1 {
    font-size: 30px;
    line-height: 50px;
    font-weight: 900;
    float: left;
  }
  header h1 a {
    transition: opacity 0.1s;
  }
  header h1 a:hover,
  .touch-device header h1 a:hover:active {
    opacity: 0.5;
  }
  .touch-device header h1 a:hover {
    opacity: 1;
  }

  /* 언어버튼 */
  #lang-btn {
    font-size: 30px;
    line-height: 50px;
    float: right;
  }
  #btn-kr {
    opacity: 0.6;
    transition: opacity 0.1s;
  }
  #btn-kr:hover {
    opacity: 0.85;
  }
  .lang-kr #btn-kr {
    opacity: 1;
  }
  .lang-kr #btn-en {
    opacity: 0.6;
  }

  /* 언어 상태 */
  .kr {
    display: none;
  }
  .lang-kr .kr {
    display: inline;
  }
  .lang-kr .en {
    display: none;
  }

  /* 푸터 */
  footer {
    bottom: 0;
    border-top: solid 5px #fff;
    transition: transform 1s 1s;
    transform: translateY(0%);
  }
  footer.hide {
    transform: translateY(100%);
  }
  footer a {
    transition: opacity 0.1s;
  }
  #footer-first li {
    margin-right: 25px;
  }
  #footer-first li,
  #footer-second a {
    display: inline-block;
    vertical-align: top;
    font-size: 30px;
    line-height: 50px;
  }
  footer a:hover,
  .touch-device footer a:hover:active {
    opacity: 0.5;
  }
  .touch-device footer a:hover {
    opacity: 1;
  }
  .social-link-container {
    display: inline-block;
    margin-left: 10px;
  }
  #footer-second .social-link {
    font-size: 0;
    height: 50px;
    padding: 10px 5px;
    margin: 0;
    box-sizing: border-box;
  }
  #footer-second .social-link img {
    display: block;
    height: 100%;
    width: auto;
  }

  /* 타이틀 텍스트 */
  #intro {
    position: fixed;
    width: 100%;
    height: 100%;
    perspective: 1000px;
    top: 0;
    left: 0;
    will-change: transform;
  }
  #intro h2 {
    font-size: calc(40vh - 50px / 3);
    line-height: 0.8em;
    letter-spacing: -0.1em;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
  }
  #intro .line {
    transform-origin: 0% 50%;
    transform: translateZ(-100px);
    transform-style: preserve-3d;
  }
  #intro h2 .line > .inner {
    transform: rotateX(0deg);
    transform-origin: 0% 50%;
    transform-style: preserve-3d;
    transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  #intro.hide h2 .line > .inner {
    transform: rotateX(-90deg);
  }
  #intro h2 .line span {
    display: inline-block;
    position: relative;
    transform: translateZ(100px);
    opacity: 1;
    transform-style: preserve-3d;
    transition: opacity 1.1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  #intro.hide h2 .line span {
    opacity: 0;
  }

  #intro h2 .line:nth-of-type(1) > .inner {
    transition-delay: 0;
  }
  #intro h2 .line:nth-of-type(2) > .inner {
    transition-delay: 0.4s;
  }
  #intro h2 .line:nth-of-type(3) > .inner {
    transition-delay: 0.8s;
  }
  #intro h2 .line:nth-of-type(1) > .inner span {
    transition-delay: 0;
  }
  #intro h2 .line:nth-of-type(2) > .inner span {
    transition-delay: 0.4s;
  }
  #intro h2 .line:nth-of-type(3) > .inner span {
    transition-delay: 0.8s;
  }

  /* 메인 메뉴 */
  #menu {
    /* position: relative; */
    /* padding-top: 50%; */
    margin: 0;
    height: 100%;
    list-style: none;
    /* padding: 0; */
  }
  #menu li {
    height: calc(25vh - 30px);
    color: #2524ee;
    border-top: solid 5px #2524ee;
    background: #fff;
    overflow: hidden;
    position: relative;
    transition: background-color 0.1s, color 0.1s;
  }
  .side {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(110%);
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
    background: #fff;
    width: 100%;
    white-space: nowrap;
    border-top: solid 5px #2524ee;
    margin-top: -5px;
  }
  #menu li:hover .side {
    transform: translateY(0);
  }
  #menu li .side a {
    display: inline-block;
    color: #2524ee;
    background: #fff;
    font-size: 15vh;
    line-height: calc(25vh - 30px);
    letter-spacing: -0.03em;
    border-left: solid 5px #2524ee;
    cursor: pointer;
    width: 50%;
    box-sizing: border-box;
    text-align: center;
  }
  #menu li .side a:first-of-type {
    border-left: none;
  }
  #menu li .side a:hover,
  .touch-device #menu li .side a:hover:active {
    color: #fff;
    background: #2524ee;
  }
  .touch-device #menu li .side a:hover {
    color: #2524ee;
    background: #fff;
  }
  #menu li > a.menu-button {
    display: block;
    font-size: 15vh;
    letter-spacing: -0.03em;
    line-height: calc(25vh - 30px);
    padding-left: 50px;
    cursor: pointer;

    transition: transform 0.5s;
    transform: translateY(0);
    transition-timing-function: cubic-bezier(
      0.785,
      0.135,
      0.15,
      0.86
    ) !important;

    white-space: nowrap;
  }
  #menu li > a.menu-button.hide {
    transform: translateY(100%);
  }

  #menu li:hover,
  .touch-device #menu li:hover:active {
    background: #2524ee;
    color: #fff;
  }
  .touch-device #menu li:hover {
    background: #fff;
    color: #2524ee;
  }

  /* 뉴스레터 */
  #news-letter {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #eeeeff88;
    z-index: 10;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.1s, visibility 0s;
  }

  #news-letter.hide {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0s 0.1s;
  }

  #news-letter > .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #news-letter-form {
    background: white;
    z-index: 10;
    padding: 70px 100px;
    max-width: 500px;
    box-sizing: border-box;
    background-color: #fff;
    border: solid 5px #2524ee;
    color: white;
    font-size: 0;
    transition: all 0.3s;
    z-index: 1;
    border-radius: 5px;
    transform: translateY(0) scaleX(1);
    box-shadow: 9px 12px 0 #2524ee;
  }
  #news-letter.hide #news-letter-form {
    transform: translateY(10px);
    box-shadow: 0px 0px 0 #2524ee;
  }
  #news-letter-form p {
    font-size: 20px;
    color: #2524ee;
  }
  #news-letter-form input {
    width: 100%;
    display: block;
    background: #2524ee;
    border: solid #2524ee 5px;
    color: #fff;
    outline: none;
    font-size: 20px;
    line-height: 30px;
    padding: 0 10px;
    border-radius: 3px;
    margin-top: 20px;
    box-sizing: border-box;
    -webkit-appearance: none;
  }
  #news-letter-form input::-webkit-input-placeholder {
    /* Edge */
    color: #ffffff99;
  }

  #news-letter-form input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #ffffff99;
  }

  #news-letter-form input::placeholder {
    color: #ffffff99;
  }
  #news-letter-form #notice {
    color: #2524ee;
    font-size: 15px;
    line-height: 1.5em;
    padding: 5px 0;
    box-sizing: border-box;
    transition: height 0.2s;
  }
  #news-letter-form #notice.hide {
    height: 0;
    opacity: 0;
    visibility: hidden;
  }
  #news-letter-form button {
    display: block;
    border: solid 3px #2524ee;
    color: #2524ee;
    width: 100%;

    margin-top: 15px;
    padding: 10px;
    outline: none;
    border-radius: 3px;
    font-size: 20px;
    font-weight: 900;

    cursor: pointer;
    transform: translate(0px, -6px);
    box-shadow: 0px 6px 0 #2524ee;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  #news-letter-form button:hover {
    transform: translate(0px, -4px);
    box-shadow: 0px 4px 0 #2524ee;
  }
  #news-letter-form button:active {
    transform: translate(0px, -2px);
    box-shadow: 0px 2px 0 #2524ee;
  }
  #news-letter-form:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
    background-size: 150px;
    background-image: url(/texture.png);
    pointer-events: none;
  }

  /* 화면비율에 따른 인트로 타이틀텍스트 변화 */
  @media (max-aspect-ratio: 10/7) {
    #intro h2 {
      position: absolute;
      top: auto;
      bottom: calc(50px + 3vw);
      left: 2.8vw;
      font-size: calc(16vw);
    }
  }

  @media screen and (max-width: 1920px) {
    /* 푸터 */
    #footer-first li {
      margin-right: 20px;
    }
    #footer-first li,
    #footer-second a {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 1279px) {
    /* 푸터 */
    #footer-first li {
      margin-right: 18px;
    }
    #footer-first li,
    #footer-second a {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1023px) {
    /* padding-bottom: 0;
    padding-top: 0;
    background: transparent; */
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
    }

    /* 컨테이너 */
    /* #container-main {
      padding-top: 0;
      background: transparent;
    } */

    /* 헤더 */
    header {
      position: absolute;
      right: 3vw;
      top: 3vw;

      opacity: 1;
      visibility: visible;
      transform: none;
      background: transparent;
      border: none;
      padding: 0;
    }
    header.hide {
      transform: none;
    }
    header h1 {
      display: none;
    }
    header #lang-btn {
      line-height: 1em;
      font-size: 20px;
    }

    /* 푸터 */
    footer {
      position: static;
      height: auto;
      padding: 0;
      margin: 0;
      background-color: transparent;
      color: #2524ee;
      border-top: none;
      padding: 3vw 3vw 4vw;
      transform: none;
    }
    footer.hide {
      transform: none;
    }
    footer > * {
      float: none !important;
      margin: 0;
    }
    footer a {
      margin: 0;
      padding: 0;
      display: block;
      font-size: 20px;
      line-height: 1em;
    }

    #footer-first {
      margin-bottom: 50px;
    }
    #footer-first li {
      display: block;
      margin: 0;
      margin-top: 8px;
      line-height: 1em;
    }
    #footer-first li:first-of-type {
      margin-top: 0;
    }
    #footer-first a {
      display: inline-block;
    }

    #footer-second.fixed {
      position: fixed;
      bottom: 4vw;
      left: 3vw;
      right: 3vw;
    }
    #footer-second:after {
      content: '';
      display: block;
      clear: both;
    }
    #footer-second #email {
      float: left;
      font-size: 16px;
      line-height: 1em;
      padding-top: 12px;
      margin: 0;
    }
    .social-link-container {
      float: right;
      margin: 0;
    }
    #footer-second .social-link {
      display: inline-block;
      height: 30px;
      padding: 0;
      margin: 0;
      margin-left: 5px;
      box-sizing: content-box;
    }
    .social-link > .mobile {
      display: block;
      height: 100%;
    }


    /* 타이틀 텍스트 */
    #intro {
      position: relative;
      background-color: #2524ee;
      padding-top: 56%;
      height: auto;
      transform: none !important;
    }
    #intro h2 {
      position: absolute;
      top: auto;
      bottom: 3vw;
      left: 2.8vw;
      font-size: calc(16vw);
    }

    /* 메인메뉴 */
    #menu {
      border-bottom: solid 3px #2524ee;
    }
    #menu li {
      height: auto;
      border-width: 3px;
    }
    #menu li .side a,
    #menu li > a.menu-button {
      font-size: 10vw;
      line-height: 1em;
      padding: 3vw;
    }
    #menu li:nth-of-type(1) > a.menu-button {
      transition: transform 0.5s 1.3s;
    }
    #menu li:nth-of-type(2) > a.menu-button {
      transition: transform 0.5s 1.4s;
    }
    #menu li:nth-of-type(3) > a.menu-button {
      transition: transform 0.5s 1.5s;
    }
    #menu li:nth-of-type(4) > a.menu-button {
      transition: transform 0.5s 1.6s;
    }
    .side {
      border-top: solid 3px #2524ee;
      margin-top: -3px;
    }
    #menu li .side a {
      border-left: solid 3px #2524ee;
    }

    /* 뉴스레터 */
    #news-letter-form {
      width: calc(100vw - 25px);
      padding: 30px 30px;
      border: solid 3px #2524ee;
      box-shadow: 6px 8px 0 #2524ee;
    }
    #news-letter.hide #news-letter-form {
      box-shadow: 0px 0px 0 #2524ee;
    }

    /* 텍스쳐 적용 */

    /* 위와 겹치는 텍스쳐 해제 */
    header:after,
    footer:after,
    #menu:after,
    #intro:after{
      content: '';
      display: none;
      background: none;
    }
  }
`
