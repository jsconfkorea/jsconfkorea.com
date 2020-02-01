import React, { ReactNode } from 'react'
import Layout from '../../components/Layout'
import { I18nextProvider } from 'react-i18next'
import { i18n } from './'

export default ({ element }: { element: ReactNode }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>{element}</Layout>
    </I18nextProvider>
  )
}
