import styled from '@emotion/styled'

const Intro = styled.div`

  position: fixed;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  top: 0;
  left: 0;
  will-change: transform;
  pointer-events:none;

  :after {
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
  
  h2 {
    position: absolute;
    left: 0;
    top: 1%;
    bottom: 50px;
    overflow:visible;
  }
  .line {
    height:33.3%;
    padding-left:1%;
    transform-origin: 0% 50%;
    transform: translateZ(-100px);
    transform-style: preserve-3d;
    overflow:visible;
  }
  
  h2 .line:nth-of-type(2){
    padding-left:3%;
  }
  
  h2 .line > .inner {
    height:100%;
    transform: rotateX(0deg);
    transform-origin: 0% 50%;
    transform-style: preserve-3d;
    transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    overflow:visible;
  }
  
  .hide h2 .line > .inner {
    transform: rotateX(-90deg);
  }
  
  h2 img{
    height:96%;
    width:auto;
  }
  
  h2 .line span {
    height:100%;
    display: inline-block;
    position: relative;
    transform: translateZ(100px);
    opacity: 1;
    transform-style: preserve-3d;
    transition: opacity 1.1s cubic-bezier(0.075, 0.82, 0.165, 1);
    overflow:visible;
  }
  
  .hide h2 .line span {
    opacity: 0;
  }

  h2 .line:nth-of-type(1) > .inner {
    transition-delay: 0;
  }
  
  h2 .line:nth-of-type(2) > .inner {
    transition-delay: 0.4s;
  }
  
  h2 .line:nth-of-type(3) > .inner {
    transition-delay: 0.8s;
  }
  
  h2 .line:nth-of-type(1) > .inner span {
    transition-delay: 0;
  }
  
  h2 .line:nth-of-type(2) > .inner span {
    transition-delay: 0.4s;
  }
  
  h2 .line:nth-of-type(3) > .inner span {
    transition-delay: 0.8s;
  }

  /* 화면비율에 따른 인트로 타이틀텍스트 변화 */
  @media (max-aspect-ratio: 10/7) {
    h2 {
      position: absolute;
      top: auto;
      bottom: calc(50px + 3vw);
      left: 2.8vw;
      font-size: 16vw;
    }
    
    .line{
      height:12.5vw;
    }
  }

  @media screen and (max-width: 1023px) {
    
    position: relative;
    background-color: #2524ee;
    padding-top: 56%;
    height: auto;
    transform: none !important;
    
    h2 {
      position: absolute;
      top: auto;
      bottom: 5vw;
      left: 2.8vw;
    }
    
    .line{
      height:12.5vw;
    }

    :after{
      content: '';
      display: none;
      background: none;
    }
  }
`
export default Intro;