import React, { ReactNode } from 'react'
import GlobalStyle from './GlobalStyle'
import Helmet from 'react-helmet'
// import { i18n } from '../lib/gatsby-browser'
// import { initReactI18next, I18nextProvider, useSSR } from 'react-i18next'

// i18n.use(initReactI18next).init({
//   resources: {
//     en: {
//       translation: {
//         'Welcome to React': 'Welcome to React and react-i18next',
//       },
//     },
//   },
//   lng: 'en',
//   fallbackLng: 'en',
//   interpolation: {
//     escapeValue: false,
//   },
// })

type Props = {
  children: ReactNode
}

export default (props: Props) => {
  const { children } = props
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta
          name="google-site-verification"
          content="0E9yjm4IaEv6jFmQPjNRi2dQ5wrVSeosCJHJXBjA_H8"
        />
      </Helmet>
      {children}
    </>
  )
}
