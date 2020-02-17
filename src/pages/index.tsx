import React from 'react'
import Markdown from '../components/Markdown'
import styled from '@emotion/styled'
import getGoogleDocsText from '../utils/getGoogleDocsText'
import { getInitialPropsArgs } from '../types/types'
import { languages, getGoogleDocsId } from '../config/constants'
import { useTranslation } from 'react-i18next'
import ChangeLanguage from '../components/ChangeLanguage'

type Props = {}

const Index = ({}: Props) => {
  const { t } = useTranslation()
  return (
    <Style>
      <ChangeLanguage />
      <Markdown>{t('markdown')}</Markdown>
    </Style>
  )
}

export const getInitialProps = async ({ route }: getInitialPropsArgs) => {
  const [en, ko] = await Promise.all(
    languages
      .map(lang => getGoogleDocsId({ lang, route }))
      .filter(v => v)
      .map(getGoogleDocsText),
  )
  return { en: { markdown: en }, ko: { markdown: ko } }
}

const Style = styled.div`
  display: grid;
`

export default Index
