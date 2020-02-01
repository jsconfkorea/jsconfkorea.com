import { CreatePageArgs } from 'gatsby'
import { languages } from '../../config/constants'
import { join, resolve } from 'path'

export default async ({
  actions: { createPage, deletePage },
  page,
}: CreatePageArgs) => {
  // console.log(page)
  // const com = require(`${page.component}`)
  // console.log(page)
  if (page.path === '/dev-404-page/') return
  const path = page.path as string
  const component = page.component as string
  const { default: PageComponent } = await import(
    join(process.cwd(), 'src/pages', resolve(path))
  )
  deletePage({ path, component })

  for (const lang of ['', ...languages]) {
    const context = PageComponent.getInitialProps
      ? await PageComponent.getInitialProps({ lang })
      : {}
    createPage({
      path: join('/', lang, path),
      component,
      context,
    })
  }
}
