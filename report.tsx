import React from 'react'
// import { changeLocale } from 'gatsby-plugin-intl'
import { useIntl } from 'react-intl'
import useTrans from './src/hooks/useTrans'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
// import np from 'nprogress'
import ReportImage from './src/components/ReportIllust'
// import useLocalStorage from '../hooks/useLocalStorage'

export default () => {
  const intl = useIntl()
  const t = useTrans()
  // const [text, setText] = useLocalStorage('reportText', '')
  const text = ''
  const setText = (s: string) => {}
  return (
    <>
      <Helmet>
        <title>{t('report.title')} | JSConf Korea</title>
        <link rel="icon" href="/icon.png" />
        <meta
          property="og:title"
          content={`${t('report.title')} | JSConf Korea`}
        />
        <meta property="og:description" content={t('report.description')} />
      </Helmet>
      <Component>
        <h1>{t('report.title')}</h1>
        <p>{t('report.description')}</p>
        <button
          className="changeLocale"
          onClick={() => {
            // if (intl.locale === 'ko') changeLocale('en')
            // else changeLocale('ko')
          }}
        >
          {t('change_locale')}
        </button>
        <ReportImage />
        <span>{t('report.label')}</span>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={t('report.placeholder')}
        ></textarea>
        <button
          className="submit"
          onClick={async () => {
            if (text === '') return alert(t('report.empty_text_msg'))
            // np.start()
            const res = await fetch('/api/mail/send', {
              method: 'POST',
              body: JSON.stringify({ text }),
            })
            if (res.status !== 202) return alert(t('report.error_msg'))
            // np.done()
            alert(t('report.sucess_msg'))
          }}
        >
          {t('report.submit')}
        </button>
      </Component>
    </>
  )
}

const Component = styled.div`
  margin: auto;
  max-width: 420px;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  h1 {
    font-weight: 900;
    margin: 0;
    line-height: 40px;
    font-size: 28px;
    color: #ee7911;
    margin-bottom: 1rem;
  }
  p {
    display: inline-block;
    /* margin-top: 1rem; */
    font-size: 1rem;
    line-height: 22px;
    color: #202020;
    margin-bottom: 1rem;
  }
  .changeLocale {
    position: absolute;
    right: 1rem;
    background-color: white;
    border: none;
    font-weight: 900;
    line-height: 22px;
    color: rgba(57, 57, 57, 0.6);
    height: 40px;
    text-align: right;
    cursor: pointer;
    &:hover {
      background-color: #eeeeee;
    }
  }
  svg {
    display: block;
    min-height: 150px;
    height: 100%;
    max-height: 220px;
    max-width: 100%;
    flex: 1 1;
    margin-bottom: 1rem;
  }
  span {
    font-weight: bold;
    line-height: 23px;
    color: #ee7911;
    margin-bottom: 0.5rem;
  }
  textarea {
    background: #eeeeee;
    border: 0px;
    resize: none;
    width: 100%;
    padding: 0.8rem;
    min-height: 120px;
    max-height: 200px;
    flex: 1 1;
    transition-property: border;
    -webkit-appearance: none;
    transition-duration: 0.15s;
    border: 2px solid #dddddd;
    caret-color: #ee7911;
    &::placeholder {
      color: #cbcfd4;
    }
    &:focus {
      border: 2px solid #ee7911;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  }
  .submit {
    margin-top: 1rem;
    background: #ee7911;
    border-radius: 4px;
    border: 0px;
    width: 100%;
    min-height: 50px;
    color: white;
    font-weight: 900;
    line-height: 23px;
    cursor: pointer;
    transition-property: color, background-color;
    transition-duration: 0.3s;
    &:hover {
      background-color: rgba(238, 121, 17, 0.8);
    }
  }
`
