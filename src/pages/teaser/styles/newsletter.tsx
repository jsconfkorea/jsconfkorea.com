import styled from '@emotion/styled'

const NewsLetter = styled.div`
  /* 뉴스레터 */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eeeeff88;
  z-index: 10;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.1s, visibility 0s;

  &.hide {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0s 0.1s;
  }
  
  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #news-letter-form {
    background: white;
    z-index: 10;
    padding: 70px 100px;
    max-width: 500px;
    box-sizing: border-box;
    background-color: #fff;
    border: solid 5px #2524ee;
    color: white;
    font-size: 0;
    transition: all 0.3s;
    z-index: 1;
    border-radius: 5px;
    transform: translateY(0) scaleX(1);
    box-shadow: 9px 12px 0 #2524ee;
  }
  
  &.hide #news-letter-form {
    transform: translateY(10px);
    box-shadow: 0px 0px 0 #2524ee;
  }

  #news-letter-form p {
    font-size: 20px;
    color: #2524ee;
  }

  #news-letter-form input {
    width: 100%;
    display: block;
    background: #2524ee;
    border: solid #2524ee 5px;
    color: #fff;
    outline: none;
    font-size: 20px;
    line-height: 30px;
    padding: 0 10px;
    border-radius: 3px;
    margin-top: 20px;
    box-sizing: border-box;
    -webkit-appearance: none;
  }
  
  #news-letter-form input::-webkit-input-placeholder {
    /* Edge */
    color: #ffffff99;
  }

  #news-letter-form input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #ffffff99;
  }

  #news-letter-form input::placeholder {
    color: #ffffff99;
  }
  #news-letter-form #notice {
    color: #2524ee;
    font-size: 15px;
    line-height: 1.5em;
    padding: 5px 0;
    box-sizing: border-box;
    transition: height 0.2s;
  }
  #news-letter-form #notice.hide {
    height: 0;
    opacity: 0;
    visibility: hidden;
  }
  #news-letter-form button {
    display: block;
    border: solid 3px #2524ee;
    color: #2524ee;
    width: 100%;

    margin-top: 15px;
    padding: 10px;
    outline: none;
    border-radius: 3px;
    font-size: 20px;
    font-weight: 900;

    cursor: pointer;
    transform: translate(0px, -6px);
    box-shadow: 0px 6px 0 #2524ee;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  #news-letter-form button:hover {
    transform: translate(0px, -4px);
    box-shadow: 0px 4px 0 #2524ee;
  }
  #news-letter-form button:active {
    transform: translate(0px, -2px);
    box-shadow: 0px 2px 0 #2524ee;
  }
  #news-letter-form:before {
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

  @media screen and (max-width: 1023px) {
    /* 뉴스레터 */
    #news-letter-form {
      width: calc(100vw - 25px);
      padding: 30px 30px;
      border: solid 3px #2524ee;
      box-shadow: 6px 8px 0 #2524ee;
    }
    
    .hide #news-letter-form {
      box-shadow: 0px 0px 0 #2524ee;
    }
  }
`

export default NewsLetter;