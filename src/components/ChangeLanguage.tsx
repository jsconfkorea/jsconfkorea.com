import React, { ReactNode } from 'react'
import { languages } from '../config/constants'
import Link from '../i18n/Link'
import styled from '@emotion/styled'

type Props = {
  className?: string
}

export default (props: Props) => (
  <Style>
    {languages.map(lang => (
      <Link key={lang} lang={lang} {...props}>
        {lang}
      </Link>
    ))}
  </Style>
)

const Style = styled.div``