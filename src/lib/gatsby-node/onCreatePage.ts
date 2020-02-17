import { CreatePageArgs } from 'gatsby'
import { languages } from '../../config/constants'
import { join, resolve } from 'path'

export default async ({
  actions: { createPage, deletePage },
  page,
}: CreatePageArgs) => {
  if (page.path === '/dev-404-page/' || page.path === '/404.html') return
  const path = page.path as string
  const component = page.component as string
  const { default: PageComponent } = await import(
    join(process.cwd(), 'src/pages', resolve(path))
  )
  deletePage({ path, component })
  const route = path.slice(1, -1)
  const context = PageComponent.getInitialProps
    ? await PageComponent.getInitialProps({ route })
    : {}
  for (const lang of ['', ...languages]) {
    createPage({
      path: join('/', lang, path),
      component,
      context: {
        ...context,
        lang,
      },
    })
  }
}
