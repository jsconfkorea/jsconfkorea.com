import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import useTrans from '../hooks/useTrans'

export default () => {
  const t = useTrans()
  console.log(t)
  // useEffect(() => {
  //   if (typeof window !== 'undefined')
  //     window.location.href = 'https://2019.jsconfkorea.com/'
  // })
  return <>{t('report.title')}</>
}
