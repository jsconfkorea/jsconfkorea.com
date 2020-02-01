import React, { useEffect } from 'react'
import { ReplaceComponentRendererArgs, Link } from 'gatsby'
import fetch from 'node-fetch'
import Markdown from '../components/Markdown'
import styled from '@emotion/styled'
import getGoogleDocsText from '../utils/getGoogleDocsText'
import { getInitialPropsArgs } from '../types/types'
import { GOOGLE_DOCS_ID_MAP, languages } from '../config/constants'
import { useTranslation } from 'react-i18next'

type Props = {
  pageContext: {
    markdown: string
  }
} & ReplaceComponentRendererArgs['props']

const Index = ({ pageContext }: Props) => {
  const { markdown } = pageContext
  const { t } = useTranslation()
  // const intl = useIntl()
  // const t = useTrans()
  // useEffect(() => {
  //   if (navigator.language.slice(0, 2) !== intl.locale) {
  //     changeLocale(navigator.language.slice(0, 2))
  //   }
  // }, [])
  // useEffect(() => {
  //   if (typeof window !== 'undefined')
  //     window.location.href = 'https://2019.jsconfkorea.com/'
  // })
  return (
    <Style>
      <div>
        {languages.map(lang => (
          <div key={lang}>
            <Link to={`/${lang}`}>{lang}</Link>
          </div>
        ))}
        {t('Welcome to React')}
      </div>
      <Markdown>{markdown}</Markdown>
    </Style>
  )
}

type LANGUGES = 'en' | 'ko'
const defaultLang = 'en'

Index.getInitialProps = async ({ lang }: getInitialPropsArgs) => {
  lang = lang || defaultLang
  const id = GOOGLE_DOCS_ID_MAP[lang as LANGUGES]['about']
  const markdown = await getGoogleDocsText(id)
  return { markdown }
}

const Style = styled.div`
  display: grid;
  justify-content: center;
`

export default Index
