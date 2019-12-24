import React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

const style = css`
  ${emotionNormalize}
  html,
  body {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
`

export default () => <Global styles={style} />
