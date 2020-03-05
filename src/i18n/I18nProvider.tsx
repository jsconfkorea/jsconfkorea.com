import React, { ReactNode } from 'react'
import i18n from 'i18next'
import { initReactI18next, I18nextProvider } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { languages } from '../config/constants'
import useI18nLocales from '../hooks/useI18nLocales'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'ko',
    fallbackLng: 'ko',
    detection: {
      order: ['navigator'],
    },
    react: {
      useSuspense: false
    }
  })

type Props = {
  children: ReactNode
  pageContext: {
    en: {
      markdown: string
    }
    ko: {
      markdown: string
    }
    lang: string
  }
}

export { i18n }

export default (props: Props) => {
  const locales = useI18nLocales()
  locales.map((node: any, i: number) => {
    i18n.addResourceBundle(
      i === 0 ? 'en' : 'ko',
      'translation',
      node.translation,
      true,
      true,
    )
  })
  const { children, pageContext } = props
  const { lang } = pageContext
  languages.map(lang => {
    pageContext[lang] &&
      i18n.addResource(
        lang,
        'translation',
        'markdown',
        pageContext[lang].markdown,
      )
  })
  if (lang !== '') {
    i18n.changeLanguage(lang)
  } else if (typeof window !== 'undefined') {
    i18n.changeLanguage(navigator.language.slice(0, 2))
  }

  return (
    <>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </>
  )
}
