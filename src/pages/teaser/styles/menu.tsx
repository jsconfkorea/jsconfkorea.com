import styled from '@emotion/styled'

export const Menu = styled.div`
  /* 메인 메뉴 */
  position:relative;
  height:calc(100% - 105px);
  margin-top: 55px;

  #menu:after {
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

  #menu {
    position: relative;
    top:100%;
    height:100%;
    list-style: none;
    margin-bottom:55px;
  }
  #menu li {
    height: 25%;
    color: #2524ee;
    border-top: solid 5px #2524ee;
    background: #fff;
    overflow: hidden;
    position: relative;
    transition: background-color 0.1s, color 0.1s;
    box-sizing:border-box;
  }
  .side {
    position: absolute;
    top: -5px;
    bottom:0px;
    right: 0;
    transform: translateY(110%);
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
    background: #fff;
    width: 100%;
    font-size:0;
    white-space: nowrap;
    border-top: solid 5px #2524ee;
    box-sizing:border-box;
  }
  #menu li:hover .side {
    transform: translateY(0);
  }
  #menu li .side a {
    display: table;
    float:left;
    color: #2524ee;
    background: #fff;
    line-height: 1em;
    letter-spacing: -0.03em;
    border-left: solid 5px #2524ee;
    cursor: pointer;
    width: 50%;
    height: 101%;
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
  #menu li .side a>span{
    display:table-cell;
    vertical-align:middle;
  }

  #menu a, #menu button { font-size: 27.5px; }
  
  @media screen and (min-height:480px) and (min-width:1024px){
    #menu a, #menu button { font-size: 47.5px; }
  }
  @media screen and (min-height:600px) and (min-width:1024px){
    #menu a, #menu button { font-size: 62.5px; }
  }
  @media screen and (min-height:768px) and (min-width:1024px){
    #menu a, #menu button { font-size: 83.5px; }
  }
  @media screen and (min-height:960px) and (min-width:1024px){
    #menu a, #menu button { font-size: 107.5px; }
  }
  @media screen and (min-height:1024px) and (min-width:1024px){
    #menu a, #menu button { font-size: 115.5px; }
  }
  @media screen and (min-height:1080px) and (min-width:1024px){
    #menu a, #menu button { font-size: 122.5px; }
  }
  @media screen and (min-height:1200px) and (min-width:1024px){
    #menu a, #menu button { font-size: 137.5px; }
  }
  @media screen and (min-height:1440px) and (min-width:1024px){
    #menu a, #menu button { font-size: 167.5px; }
  }
  @media screen and (min-height:1600px) and (min-width:1024px){
    #menu a, #menu button { font-size: 187.5px; }
  }
  @media screen and (min-height:1800px) and (min-width:1024px){
    #menu a, #menu button { font-size: 212.5px; }
  }

  
  #menu li > .menu-button {
    display: table;
    letter-spacing: -0.03em;
    line-height: 1em;
    width:100%;
    height:100%;
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
  #menu li > .menu-button.hide {
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

  #menu li > .menu-button>span{
    display:table-cell;
    vertical-align:middle;
  }

  @media screen and (max-width: 1023px) {

    /* 메인메뉴 */
    height:auto;
    margin-top:0;
    
    #menu {
      top:auto;
      height:auto;
      border-bottom: solid 3px #2524ee;
    }
    #menu li {
      height: auto;
      border-width: 3px;
    }
    #menu a, #menu button{
      font-size:10vw;
      line-height: 1em;
    }
    #menu li .side a,
    #menu li > .menu-button {
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

    /* 위와 겹치는 텍스쳐 해제 */
    #menu:after {
      content: '';
      display: none;
      background: none;
    }
  }
`