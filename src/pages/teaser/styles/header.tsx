import styled from '@emotion/styled'

export const Header = styled.header`
  top: 0;
  border-bottom: solid 5px #fff;
  transform: translateY(0);
  transition: transform 0.3s;
  position: fixed;
  left: 0;
  right: 0;
  background: #2524ee;
  padding: 0 25px;
  height: 50px;
  color: #fff;
  z-index: 1;

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

  h1 {
    font-size: 30px;
    line-height: 50px;
    font-weight: 900;
    float: left;
  }

  h1 a {
    transition: opacity 0.1s;
  }

  &.hide {
    position: relative;
    transform: translateY(-55px);
  }
  
  h1 a:hover,
  h1 a:hover:active {
    opacity: 0.5;
  }

  h1 a:hover {
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

  @media screen and (max-width: 1023px) {
    position: absolute;
    right: 3vw;
    top: 3vw;

    opacity: 1;
    visibility: visible;
    transform: none;
    background: transparent;
    border: none;
    padding: 0;
    
    &.hide {
      position: relative;
      transform: none;
    }
    
    h1 {
      display: none;
    }
    
    #lang-btn {
      line-height: 1em;
      font-size: 20px;
    }
    :after {
      content: '';
      display: none;
      background: none;
    }
  }
`