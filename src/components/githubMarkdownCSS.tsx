import { css } from '@emotion/core'

const style1 = css`
  @font-face {
    font-family: octicons-anchor;
    src: url(data:font/woff;charset=utf-8;base64,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)
      format('woff');
  }

  a {
    background: transparent;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  strong {
    font-weight: bold;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  img {
    border: 0;
  }

  hr {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
  }

  pre {
    overflow: auto;
  }

  code,
  kbd,
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  input {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  html input[disabled] {
    cursor: default;
  }

  input {
    line-height: normal;
  }

  input[type='checkbox'] {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  * {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  input {
    font: 13px/1.4 Helvetica, arial, freesans, clean, sans-serif,
      'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  a {
    color: #4183c4;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }

  hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #ddd;
  }

  hr:before {
    display: table;
    content: '';
  }

  hr:after {
    display: table;
    clear: both;
    content: '';
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 15px;
    margin-bottom: 15px;
    line-height: 1.1;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 21px;
  }

  h3 {
    font-size: 16px;
  }

  h4 {
    font-size: 14px;
  }

  h5 {
    font-size: 12px;
  }

  h6 {
    font-size: 11px;
  }

  blockquote {
    margin: 0;
  }
`

const style2 = css`
  ul,
  ol {
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ul ul ol,
  ul ol ol,
  ol ul ol,
  ol ol ol {
    list-style-type: lower-alpha;
  }

  dd {
    margin-left: 0;
  }

  code {
    font: 12px Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  }

  pre {
    margin-top: 0;
    margin-bottom: 0;
    font: 12px Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  }

  kbd {
    background-color: #e7e7e7;
    background-image: -webkit-linear-gradient(#fefefe, #e7e7e7);
    background-image: linear-gradient(#fefefe, #e7e7e7);
    background-repeat: repeat-x;
    border-radius: 2px;
    border: 1px solid #cfcfcf;
    color: #000;
    padding: 3px 5px;
    line-height: 10px;
    font: 11px Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    display: inline-block;
  }

  .anchor {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: block;
    padding-right: 6px;
    padding-left: 30px;
    margin-left: -30px;
  }

  .anchor:focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin-top: 1em;
    margin-bottom: 16px;
    font-weight: bold;
    line-height: 1.4;
  }

  h1 .octicon-link,
  h2 .octicon-link,
  h3 .octicon-link,
  h4 .octicon-link,
  h5 .octicon-link,
  h6 .octicon-link {
    display: none;
    color: #000;
    vertical-align: middle;
  }

  h1:hover .anchor,
  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor {
    height: 1em;
    padding-left: 8px;
    margin-left: -30px;
    line-height: 1;
    text-decoration: none;
  }

  h1:hover .anchor .octicon-link,
  h2:hover .anchor .octicon-link,
  h3:hover .anchor .octicon-link,
  h4:hover .anchor .octicon-link,
  h5:hover .anchor .octicon-link,
  h6:hover .anchor .octicon-link {
    display: inline-block;
  }
`

const style3 = css`
  h1 {
    padding-bottom: 0.3em;
    font-size: 2.25em;
    line-height: 1.2;
    border-bottom: 1px solid #eee;
  }

  h2 {
    padding-bottom: 0.3em;
    font-size: 1.75em;
    line-height: 1.225;
    border-bottom: 1px solid #eee;
  }

  h3 {
    font-size: 1.5em;
    line-height: 1.43;
  }

  h4 {
    font-size: 1.25em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 1em;
    color: #777;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre {
    margin-top: 0;
    margin-bottom: 16px;
  }

  hr {
    height: 4px;
    padding: 0;
    margin: 16px 0;
    background-color: #e7e7e7;
    border: 0 none;
  }

  ul,
  ol {
    padding-left: 2em;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  li > p {
    margin-top: 16px;
  }

  dl {
    padding: 0;
  }

  dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: bold;
  }

  dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }
`

const style4 = css`
  blockquote {
    padding: 0 15px;
    color: #777;
    border-left: 4px solid #ddd;
  }

  blockquote > :first-of-type {
    margin-top: 0;
  }

  blockquote > :last-of-type {
    margin-bottom: 0;
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
    word-break: normal;
    word-break: keep-all;
  }

  table th {
    font-weight: bold;
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid #ddd;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;
  }

  table tr:nth-of-type(2n) {
    background-color: #f8f8f8;
  }

  img {
    max-width: 100%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  code {
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 3px;
  }

  code:before,
  code:after {
    letter-spacing: -0.2em;
    content: '\\00a0';
  }

  pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  @media (min-width: 43.75em) {
    body {
      padding: 30px;
    }
  }
`

export default css`
	${style1}
	${style2}
	${style3}
	${style4}
`
