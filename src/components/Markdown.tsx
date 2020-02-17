import React, { ReactNode, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import githubMarkdownCSS from './githubMarkdownCSS'

type Props = {
  children: ReactNode
}

export default ({ children }: Props) => (
  <>
    <Markdown skipHtml={true}>{children}</Markdown>
  </>
)

const Markdown = styled(ReactMarkdown)`
  padding: 1rem;
  max-width: 790px;

  &:first-of-type {
    margin-top: 0 !important;
  }

  &:last-of-type {
    margin-bottom: 0 !important;
  }
  
  ${githubMarkdownCSS}
`
