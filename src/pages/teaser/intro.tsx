import React, { useEffect, useState } from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Intro from './styles/intro'

export default () => {
  const [introStyle, setIntroStyle] = useState({ transform: 'none'});
  const [showIntro, setShowIntro] = useState("hide");
  
  useEffect(() => {
    setShowIntro("");
  }, [])

  useScrollPosition(
    ({ currPos }) => {
      const scale = ((-1 * currPos.y)/window.innerHeight)>1?1:(((-1 * currPos.y)/window.innerHeight) * 0.075);
      const shouldBeStyle = {
        willChange: "transform",
        transform: `translateY(${-1 * currPos.y * 0.1}px) translateZ(0) scale(${1 - scale})`
      }
      if (JSON.stringify(shouldBeStyle) === JSON.stringify(introStyle)) return
   
      setIntroStyle(shouldBeStyle)
    },
    [introStyle]
  )
  
  return (
    <Intro className={showIntro} style={{ ...introStyle }}>
      <h2>
        <div className="line">
          <div className="inner">
            <span><img alt="jsconf" src="title0.svg" /></span>
          </div>
        </div>
        <div className="line">
          <div className="inner">
            <span><img alt="korea" src="title1.svg" /></span>
          </div>
        </div>
        <div className="line">
          <div className="inner">
            <span><img alt="2020" src="title2.svg" /></span>
          </div>
        </div>
      </h2>
    </Intro>
  )
}