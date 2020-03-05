import React, { useState } from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import emotionReset from 'emotion-reset'
import useScript from '../../hooks/useScript'
import Header from './header'
import Intro from './intro'
import Menu from './menu'
import Footer from './footer'
import NewsLetter from './newsletter'


export default () => {
  const [showNewsLetter, setShowNewsLetter] = useState("hide");
  
  const toggleNewsLetter = (toggle: boolean) => {
    if (toggle) {
      setShowNewsLetter("")
    } else {
      setShowNewsLetter("hide")
    }
  }
  
  useScript('/p5/graphic.min.js', () => {
    document.querySelector('canvas')!.remove()
  })
  useScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.min.js')

  return (
    <>
      <Global styles={style} />
      <Style
        id="container-main"
        className="container">
        <Header/>
        <Intro />
        <Menu toggleNewsLetter={toggleNewsLetter}/>
        <Footer/>
        <NewsLetter showNewsLetter={showNewsLetter} toggleNewsLetter = { toggleNewsLetter }/>
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
    height: 100%;
    
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%
  }
  body::-webkit-scrollbar {
    display: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  button{
    -webkit-appearance:none;
    padding:0;
    margin:0;
    border:none;
    outline:none;
    background:transparent;
    color:inherit;
    font-weight:inherit;
    font-family:inherit;
  }
  button:hover{
    background:transparent;
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

  // @media screen and (max-width: 1023px) {
  //   html,
  //   body,
  //   #___gatsby,
  //   #gatsby-focus-wrapper {
  //     height: auto
  //   }
  // }
`

const Style = styled.div`
  height: 100%;
  background: #2524ee;

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

  .touch-device footer a:hover:active {
    opacity: 0.5;
  }
  .touch-device footer a:hover {
    opacity: 1;
  }

  /* 헤더 푸터 */

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
  }
`
