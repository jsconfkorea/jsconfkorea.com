import React, { useEffect } from 'react'
import Helmet from 'react-helmet'

export default () => {
  useEffect(() => {
    if (typeof window !== 'undefined')
      window.location.href = 'https://2019.jsconfkorea.com/'
  })
  return <></>
}
