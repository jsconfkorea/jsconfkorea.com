import React, { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import githubMarkdownCSS from './githubMarkdownCSS'

type Props = {
  children: ReactNode
}

const flatten = (text: string, child: any): any => {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

const headingRenderer = (props: any) => {
  const children = React.Children.toArray(props.children)
  const text = children.reduce(flatten, '')
  const slug = text.toLowerCase().replace(/\s/g, '-')
  return React.createElement('h' + props.level, { id: slug }, props.children)
}

export default ({ children }: Props) => (
  <Style>
    <Markdown skipHtml={true} renderers={{ heading: headingRenderer }}>
      {children}
    </Markdown>
  </Style>
)

const Style = styled.div`
  height: auto;
  /* overflow-y: hidden; */
  &::before {
    content: '';
    display: block;
    width: 100%;
    z-index: -1;
    height: 150px;
    background-color: #2524ee;

    @media screen and (min-width: 1023px) {
      height: 220px;
    }
  }
`

const Markdown = styled(ReactMarkdown)`
  z-index: 2;
  max-width: 800px;
  margin:0 auto;
  margin-top: -4rem;
  font-family: 'Noto Sans KR';
  font-weight: 900;
  font-size: 1rem;
  color: #2524ee;
  padding: 1rem;
  height: auto;

  & > * {
    overflow-y: visible;
  }

  @media screen and (min-width: 1023px) {
    margin-top: -5rem;
    padding-bottom: 55px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }


  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
    background-size: 150px;
    background-image: url(/texture.png);
    pointer-events: none;
  }

  /* & * {
    overflow-y: hidden;
  } */

  h1 {
    &:first-of-type {
      margin: 0;
      color: white;
      font-size:40px;
    }
    &:not(:first-of-type) {
      font-weight: 900;
      margin-top:80px;
      margin-bottom:25px;
      font-size:25px;
    }
  }

  h2 {
    margin-top:60px;
    margin-bottom:20px;
    font-size:20px;
  }

  h3 {
    margin-top:60px;
    margin-bottom:20px;
    font-size:20px;
  }

  ul {
    margin-top:30px;
    margin-bottom:30px;
    & > li {
      margin-top: 10px;
      font-size: 15px;
      line-height: 1.5em;
      color: #2524ee;
      border: solid 1px #2524ee;
      padding: 10px 15px;
      border-radius: 3px;
    }
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5em;
  }

  a {
    color: #907800 !important;
  }

  @media screen and (max-width:1023px){
    h1 {
      &:first-of-type {
        font-size:30px;
      }
      &:not(:first-of-type) {
        margin-top: 0;
        padding-top:50px;
        margin-bottom:20px;
        font-size:20px;
        line-height:1.5em;
      }
    }

    h2 {
      margin-top: 0;
      padding-top:50px;
      margin-bottom:20px;
      font-size:20px;
      line-height:1.5em;
    }
  }

  /* ${githubMarkdownCSS} */
`
