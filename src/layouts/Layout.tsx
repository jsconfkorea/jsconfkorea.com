import React, { ReactNode } from 'react'
import GlobalStyle from '../components/GlobalStyle'

type Props = {
  children: ReactNode
}

export default ({ children }: Props) => (
  <>
    <GlobalStyle />
    {children}
  </>
)
