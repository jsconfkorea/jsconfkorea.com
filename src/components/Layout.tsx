import React, { ReactNode } from 'react'
import GlobalStyle from './GlobalStyle'
import Helmet from 'react-helmet'
import { ReplaceComponentRendererArgs } from 'gatsby'
import I18nProvider from '../i18n/I18nProvider'

type Props = {
  children: ReactNode
  pageContext: {
    en: {
      markdown: string
    }
    ko: {
      markdown: string
    }
    lang: string
  }
} & ReplaceComponentRendererArgs['props']

export default (props: Props) => {
  const { children, pageContext, location } = props
  const isTeaserSite = location.pathname === '/teaser'

  return (
    <>
      {!isTeaserSite && <GlobalStyle />}
      <Helmet>
        <meta
          name="google-site-verification"
          content="0E9yjm4IaEv6jFmQPjNRi2dQ5wrVSeosCJHJXBjA_H8"
        />
      </Helmet>
      <I18nProvider pageContext={pageContext}>{children}</I18nProvider>
    </>
  )
}
