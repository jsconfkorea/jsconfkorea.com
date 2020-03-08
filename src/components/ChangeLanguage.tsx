import React, { ReactNode } from 'react'
import Link from '../i18n/Link'
import styled from '@emotion/styled'

type Props = {
  className?: string
}

export default (props: Props) => (
  <Style>
    <Link lang="en" {...props}>
      EN
    </Link>
    {' / '}
    <Link lang="ko" {...props}>
      KR
    </Link>
  </Style>
)

const Style = styled.div`
  float: right;
  display: block;
  line-height: 50px;
  color: white;
  font-size: 20px;
  a {
    display: inline;
    color: white;
    font-size: 20px;
    line-height: 50px;
    padding: 0;
  }

  @media screen and (min-width: 1023px) {
    font-size: 30px;
    a {
      font-size: 30px;
    }
  }
`
