import React from 'react'
import Markdown from '../components/Markdown'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import { getInitialProps } from '.'
import Header from '../components/Header'
import Footer from '../components/Footer'

type Props = {}

const CallForProposals = ({}: Props) => {
  const { t } = useTranslation()
  return (
    <Style>
      <Header />
      <Markdown>{t('markdown')}</Markdown>
      <Footer />
    </Style>
  )
}

CallForProposals.getInitialProps = getInitialProps

const Style = styled.div`
  display: grid;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`

export default CallForProposals
