import React from 'react'

import { Provider as ReduxProvider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'

import ScreenContext from './ScreenContext'

import { useApollo } from '@core/libs/apollo/apollo'

import { store } from '@core/stores'

const ComposeProvider = ({ children, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  const providers = React.useMemo(
    () => [
      [ReduxProvider, { store: store }],
      [ApolloProvider, { client: apolloClient }],
      ScreenContext
    ],
    []
  )

  return providers.reduceRight((componentTree, cfg) => {
    const [Provider, props] = Array.isArray(cfg) ? cfg : [cfg, {}]
    return <Provider {...props}>{componentTree}</Provider>
  }, children)
}

export default ComposeProvider
