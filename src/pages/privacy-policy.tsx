import React from 'react'
import Markdown from '../components/Markdown'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { getInitialProps } from '.'
import ChangeLanguage from '../components/ChangeLanguage'

type Props = {}

const PrivacyPolicy = ({}: Props) => {
  const { t } = useTranslation()
  return (
    <Style>
      <ChangeLanguage />
      <Markdown>{t('markdown')}</Markdown>
    </Style>
  )
}

PrivacyPolicy.getInitialProps = getInitialProps

const Style = styled.div`
  display: grid;
  width: 100%;
`

export default PrivacyPolicy
