import React from 'react'
import Markdown from '../components/Markdown'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { getInitialProps } from './'
import ChangeLanguage from '../components/ChangeLanguage'

type Props = {}

const About = ({}: Props) => {
  const { t } = useTranslation()
  return (
    <Style>
      <ChangeLanguage />
      <Markdown>{t('markdown')}</Markdown>
    </Style>
  )
}

About.getInitialProps = getInitialProps

const Style = styled.div`
  display: grid;
`

export default About
