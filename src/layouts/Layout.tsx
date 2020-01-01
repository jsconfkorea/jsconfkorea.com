import React, { ReactNode } from 'react'
import GlobalStyle from '../components/GlobalStyle'
import Helmet from 'react-helmet'

type Props = {
  children: ReactNode
}

export default ({ children }: Props) => (
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
