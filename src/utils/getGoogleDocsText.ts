import fetch from 'node-fetch'
import { GOOGLE_DOCS_ID_MAP } from '../config/constants'

const getGoogleDocsURLbyID = (id: string) =>
  `https://drive.google.com/a/jsconfkorea.com/uc?id=${id}`

const ABOUT = '1NyRcbZYw4ulPQVUcNUWl0lgNxpRz2YNi'

export default async (id: string) => {
  try {
    const res = await fetch(getGoogleDocsURLbyID(id))
    if (res.status === 200) {
      const markdown = await res.text()
      return markdown
    } else {
      throw new Error('Wrong ID Error!')
    }
  } catch {
    throw new Error('Fetch Error!')
  }
}

const defaultLang = 'en'

export const getGoogleDocsIdByLang = (lang: string = defaultLang) => {}
