import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

const isBrowser = typeof window !== `undefined`

function getScrollPosition({ targetEl, useWindow }) {
  if (!isBrowser || !targetEl.current) return { x: 0, y: 0 }

  const target = targetEl ? targetEl.current : document.body

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: target.scrollLeft, y: target.scrollTop }
}

export function useScrollPosition(effect, deps, {element, targetEl, useWindow, wait}) {
  const position = useRef(getScrollPosition({ targetEl, useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ targetEl, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return
    }

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }
    
    if (targetEl.current) {
      targetEl.current.addEventListener('scroll', handleScroll)
    }
    
    
    return () => targetEl.current && targetEl.current.removeEventListener('scroll', handleScroll)
  }, deps)
}