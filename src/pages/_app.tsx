import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../core/libs/apollo/apollo'

import ScreenContext from '@core/providers/ScreenContext'

import '../App.css'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <ScreenContext>
        <Component {...pageProps} />
      </ScreenContext>
    </ApolloProvider>
  )
}
