const GOOGLE_DOCS_ID_ROUTE_MAP = {
  '1NyRcbZYw4ulPQVUcNUWl0lgNxpRz2YNi': 'about.ko.md',
  '1Yw4hpa5LRMIKMexMgwOYoAqnZQiOl2Et': 'code-of-conduct.ko.md',
  '1P7a8j6Mrw2PCmEGRwKMQDFRXnCxkJmt2': 'call-for-proposals.ko.md',
  '17PUuiVoah3Hv60Q67w0pFSE1XIq6ZfMz': 'privacy-policy.ko.md',
  '1iAvbBo26lroF8tmG6ip9wsxcsifir2If': 'accessibility.ko.md',
  '1sxrRCTb9QQyVOWig9yBKDNGm-_W9z9SS': 'frequently-asked-questions.ko.md',
  '1n9rzCsoHn_KYDqnoIsJ4tb6LpK3F6NtZ': 'scholarships.ko.md',

  '10QAre9pt5Mmapi2QJsIb4OH_Ansu_NsG': 'about.en.md',
  '1ckBmcTb7ra0WgDeoDbNRzNSAPzPhOJ9J': 'code-of-conduct.en.md',
  '1icpMeBY-6Ot2UDBE_Mt-8VoZU_NYgu06': 'call-for-proposals.en.md',
  '16ZE_9P23078QL4Yd7_kHA9Bi5VY-Yl2-': 'privacy-policy.en.md',
  '1PAjubLQKVR8NkleDk8svCRTPDs823EqG': 'accessibility.en.md',
  '12XDRWBnrv3ICclPdWC8czgejtKJ4v-38': 'frequently-asked-questions.en.md',
  '1LdBC_gkguUXiUHpcJswveQlVqoYgG3t1': 'scholarships.en.md',
}

const GOOGLE_DOCS_ROUTE_ID_MAP = Object.fromEntries(
  Object.entries(GOOGLE_DOCS_ID_ROUTE_MAP).map(([id, file]) => [file, id]),
)

type getGoogleDocsIdArgs = {
  route: string
  lang: string
}

export const getGoogleDocsId = ({ route, lang }: getGoogleDocsIdArgs) => {
  const id = GOOGLE_DOCS_ROUTE_ID_MAP[`${route}.${lang}.md`]
  return id
}

type LANGUGES = 'en' | 'ko'
export const languages: LANGUGES[] = ['en', 'ko']
