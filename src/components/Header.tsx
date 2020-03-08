import React from 'react'
import styled from '@emotion/styled'
import ChangeLanguage from './ChangeLanguage'
import Link from '../i18n/Link'

export default () => (
  <StyledHeader>
    <Link to="/">
      <span className="desktop">JSCONF KOREA 2020</span>
      <span className="mobile">
        JSCONF
        <br />
        KOREA
        <br />
        2020
      </span>
    </Link>
    <ChangeLanguage />
  </StyledHeader>
)

const StyledHeader = styled.header`
  font-family: 'Noto Sans KR';
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: #2524ee;
  padding: 0 1rem;
  font-weight: 900;
  letter-spacing: -0.1rem;
  & > a {
    float: left;
    font-size: 15px;
    display: inline-block;
    height: 50px;
    padding: 7px 0;
    transition: opacity 0.1s;
    &:hover {
      opacity: 0.5;
    }
    span {
      color: white;
    }
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
      line-height: 12px;
      letter-spacing: -0.1rem;
    }
  }

  @media screen and (min-width: 1023px) {
    border-bottom: solid 5px #fff;
    height: 55px;
    & > a {
      .desktop {
        line-height: 35px;
        display: block;
        font-size: 30px;
        letter-spacing: -0.1rem;
      }
      .mobile {
        display: none;
      }
    }
  }
`
