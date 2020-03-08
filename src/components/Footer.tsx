import React from 'react'
import styled from '@emotion/styled'
import ChangeLanguage from './ChangeLanguage'
import { useTranslation } from 'react-i18next'

export default () => {
  const { t } = useTranslation()
  return (
    <StyledFooter>
      <ul id="footer-first" className="float-left">
        <li>
          <a href="#">{t('code_of_conduct')}</a>
        </li>
        <li>
          <a href="#">{t('privacy_policy')}</a>
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
            <img src="/icon-instagram-white.svg" />
            <img src="/icon-instagram.svg" />
          </a>
          <a
            className="social-link"
            href="https://twitter.com/jsconfkorea"
            target="_blank"
          >
            <img src="/icon-twitter-white.svg" />
            <img src="/icon-twitter.svg" />
          </a>
          <a
            className="social-link"
            href="https://www.facebook.com/jsconfkorea/"
            target="_blank"
          >
            <img src="/icon-facebook-white.svg" />
            <img src="/icon-facebook.svg" />
          </a>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: static;
  display: block;
  height: auto;
  bottom: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  color: #2524ee;
  padding: 3vw 3vw 4vw;
  z-index: 1;
  font-weight: 900;
  letter-spacing: -1.6px;
  & > ul {
    margin-bottom: 50px;
    list-style: none;
    & > li {
      line-height: 20px;
      font-size: 20px;
      transition: opacity 0.1s;
      &:hover {
        opacity: 0.5;
      }
      &:first-of-type {
        margin-bottom: 0.5rem;
      }
    }
  }
  & > #footer-second {
    & > #email {
      float: left;
      font-size: 1rem;
      line-height: 1rem;
      padding-top: 12px;
      margin: 0;
      transition: opacity 0.1s;
      &:hover {
        opacity: 0.5;
      }
    }
    .social-link-container {
      float: right;
      display: block;
      margin: 0;
      & > a {
        display: inline-block;
        height: 30px;
        margin-left: 5px;
        transition: opacity 0.1s;
        &:hover {
          opacity: 0.5;
        }
        & > img {
          display: block;
          height: 100%;
          width: auto;
          &:first-of-type {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1023px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #2524ee;
    padding: 0 25px;
    height: 55px;
    color: #fff;
    z-index: 1;
    border-top: solid 5px #fff;
    & > ul {
      float: left;
      & > li {
        display: inline-block;
        vertical-align: top;
        font-size: 20px;
        line-height: 50px;
        & > a {
          color: white;
        }
        &:first-of-type {
          margin-right: 25px;
        }
      }
    }
    & > #footer-second {
      float: right;
      /* display: inline-block; */
      vertical-align: top;
      font-size: 30px;
      line-height: 50px;
      & > #email {
        padding: 0;
        display: inline-block;
        font-size: 20px;
        line-height: 50px;
        color: white;
        /* height: 100%; */
        /* vertical-align: top; */
      }
      .social-link-container {
        display: inline-block;
        margin-left: 10px;
        & > a {
          display: inline-block;
          height: 50px;
          margin-left: 5px;
          transition: opacity 0.1s;
          width: 40px;
          &:hover {
            opacity: 0.5;
          }
          & > img {
            display: block;
            margin-top: 10px;
            /* top: 0; */
            /* bottom: 0; */
            height: 30px;
            width: auto;
            &:first-of-type {
              display: block;
            }
            &:nth-of-type(2) {
              display: none;
            }
          }
        }
      }
    }
  }
`
