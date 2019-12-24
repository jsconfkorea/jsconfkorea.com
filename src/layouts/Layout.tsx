import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default ({ children }: Props) => (
  <>
    <div>test</div>
    {children}
  </>
)
