import React, { useEffect, useRef, useCallback } from "react";

export default () => {
  const intro = useRef<HTMLDivElement>(null)

  useEffect(() => {
    intro.current!.classList.remove('hide')
  }, [])

  const onScroll = useCallback(e => {
    const scrollY = e.target.scrollTop
    const innerHeight = e.target.clientHeight
    const scale =
      scrollY / innerHeight > 1 ? 1 : (scrollY / innerHeight) * 0.075
    intro.current!.style.transform =
      'translateY(' +
      -scrollY * 0.1 +
      'px) translateZ(0) scale(' +
      (1 - scale) +
      ')'


    // // 디자인 확인용 임시
    // if(scrollY > 5)header.current!.classList.remove('hide')
    // else header.current!.classList.add('hide')
    // // 디자인 확인용 임시

  }, [])
  
  return (
    <div id="intro" className="hide" ref={intro} onScroll={onScroll}>
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
    </div>
  )
}