import React, { ReactNode } from 'react'
import { CacheProvider } from '@emotion/core'

import { myCache } from './createEmotionCache'

export default ({ element }: { element: ReactNode }) => (
  <CacheProvider value={myCache}>{element}</CacheProvider>
)
