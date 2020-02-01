import React from 'react'
import { ReplaceComponentRendererArgs } from 'gatsby'

export default ({ pageContext }: ReplaceComponentRendererArgs) => {
  // const intl = useIntl()
  // const t = useTrans()
  // useEffect(() => {
  //   if (navigator.language.slice(0, 2) !== intl.locale) {
  //     changeLocale(navigator.language.slice(0, 2))
  //   }
  // }, [])
  console.log(pageContext)
  // useEffect(() => {
  //   if (typeof window !== 'undefined')
  //     window.location.href = 'https://2019.jsconfkorea.com/'
  // })
  return <>테스트페이지</>
}
