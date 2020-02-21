import { useEffect } from 'react'

export default (url: string, cleanUp?: Function) => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = url

    document.body.appendChild(script)

    return () => {
      cleanUp && cleanUp()
      document.body.removeChild(script)
    }
  }, [url])
}
