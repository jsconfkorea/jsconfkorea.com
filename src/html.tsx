import React from 'react'

type Props = {
  htmlAttributes: object
  headComponents: []
  bodyAttributes: object
  preBodyComponents: []
  body: string
  postBodyComponents: []
}

export default (props: Props) => (
  <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,400,700,900&amp;display=swap"
        rel="stylesheet"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.min.js" />
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
      {props.preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
    </body>
  </html>
)
