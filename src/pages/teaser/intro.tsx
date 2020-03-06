import React, { useEffect, useState } from "react";
import Intro from './styles/intro'

type Props = {
  introStyle: object
}
export default ({introStyle}: Props) => {
  const [showIntro, setShowIntro] = useState("hide");
  
  useEffect(() => {
    setShowIntro("");
  }, [])
  
  return (
    <Intro className={showIntro} style={{ ...introStyle }}>
      <h2>
        <div className="line">
          <div className="inner">
            <span><img alt="jsconf" src="../title0.svg" /></span>
          </div>
        </div>
        <div className="line">
          <div className="inner">
            <span><img alt="korea" src="../title1.svg" /></span>
          </div>
        </div>
        <div className="line">
          <div className="inner">
            <span><img alt="2020" src="../title2.svg" /></span>
          </div>
        </div>
      </h2>
    </Intro>
  )
}