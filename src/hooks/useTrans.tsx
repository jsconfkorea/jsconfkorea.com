import { useIntl } from 'react-intl'

export default () => {
  const intl = useIntl()
  return (id: string) => intl.formatMessage({ id })
}
