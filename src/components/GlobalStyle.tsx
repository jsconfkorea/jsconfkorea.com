import React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import 'typeface-noto-sans'

const style = css`
  ${emotionNormalize}
  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
  html {
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    overflow: hidden;
    height: 100%;
    word-break: keep-all;
  }

  body {
    font-family: 'Noto Sans', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

export default () => <Global styles={style} />
