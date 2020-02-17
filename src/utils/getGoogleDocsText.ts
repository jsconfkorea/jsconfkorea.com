import fetch from 'node-fetch'

const getGoogleDocsURLbyID = (id: string) =>
  `https://drive.google.com/a/jsconfkorea.com/uc?id=${id}`

export default async (id: string) => {
  try {
    const res = await fetch(getGoogleDocsURLbyID(id))
    if (res.status === 200) {
      const markdown = await res.text()
      return markdown
    } else {
      console.log({ id, res })
      throw new Error('Wrong ID Error!')
    }
  } catch (e) {
    console.log({ id, e })
    throw new Error('Fetch Error!')
  }
}
