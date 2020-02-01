import React, { ReactNode } from 'react'
import { CacheProvider } from '@emotion/core'

import { createMyCache } from '../gatsby-browser/createEmotionCache'

export default ({ element }: { element: ReactNode }) => (
  <CacheProvider value={createMyCache()}>{element}</CacheProvider>
)
