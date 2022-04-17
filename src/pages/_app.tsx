import { AppProps } from 'next/app'
import ComposeProvider from '@core/providers/ComposeProvider'

import '../App.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ComposeProvider pageProps={pageProps}>
      <Component {...pageProps} />
    </ComposeProvider>
  )
}
