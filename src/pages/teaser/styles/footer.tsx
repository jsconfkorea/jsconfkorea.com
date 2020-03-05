import styled from '@emotion/styled'

const Footer = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  background: #2524ee;
  padding: 0 25px;
  height: 50px;
  color: #fff;
  z-index: 1;

  bottom: 0;
  border-top: solid 5px #fff;
  transition: transform 1s 1s;
  transform: translateY(0%);

  .hide {
    transform: translateY(100%);
  }
  a {
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
    line-height: 40px;
  }

  a:hover {
    opacity: 0.5;
  }

  .social-link-container {
    display: inline-block;
    margin-left: 5px;
  }
  #footer-second .social-link {
    font-size: 0;
    height: 45px;
    padding: 11px 0;
    margin: 0;
    box-sizing: border-box;
    margin-left:10px;
  }
  #footer-second .social-link img {
    display: block;
    height: 100%;
    width: auto;
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
    /* 푸터 */

    position: static;
    height: auto;
    padding: 0;
    margin: 0;
    background-color: transparent;
    color: #2524ee;
    border-top: none;
    padding: 3vw 3vw 4vw;
    transform: none;

    .hide {
      transform: none;
    }
    
    > * {
      float: none !important;
      margin: 0;
    }
     
    a {
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

    /* 위와 겹치는 텍스쳐 해제 */
    :after {
      content: '';
      display: none;
      background: none;
    }
  }
`

export default Footer;