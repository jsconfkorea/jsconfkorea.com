import React, { ReactNode } from 'react'
import { Link, navigate } from 'gatsby'
import { languages } from '../config/constants'
import { Location } from '@reach/router'
import { i18n } from './I18nProvider'

type Props = {
  to?: string
  lang?: string
  children: ReactNode
  className?: string
}

const getPathWithoutLang = (location: any) => {
  return languages
    .map(lang => `/${lang}/`)
    .includes(location.pathname.slice(0, 4))
    ? location.pathname.slice(3)
    : location.pathname
}

export default (props: Props) => {
  const { to, children, lang } = props
  if (!to || lang) {
    return (
      <Location>
        {({ location }) => {
          const to = getPathWithoutLang(location)
          return (
            <Link
              {...props}
              to={`/${lang}${to}`}
              onClick={e => {
                e.preventDefault()
                i18n.changeLanguage(lang!)
                history.pushState({}, '', `/${lang}${to}`)
              }}
            >
              {children}
            </Link>
          )
        }}
      </Location>
    )
  }
  if (typeof window === 'undefined') {
    return <Link to={to}>{children}</Link>
  }
  const isLangugeSelected = languages
    .map(lang => `/${lang}/`)
    .includes(location.pathname.slice(0, 4))
  if (isLangugeSelected) {
    return <Link to={`${location.pathname.slice(0, 3)}${to}`}>{children}</Link>
  }
  return <Link to={to}>{children}</Link>
}
