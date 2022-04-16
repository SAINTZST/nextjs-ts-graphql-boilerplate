// import React from 'react'
// import { I18nextProvider } from 'react-i18next'

// import { ThemeProvider } from '@emotion/react'

// import ScreenContext from './ScreenContext'

// import { colors } from '@core/styles'
// import i18n from '@core/config/i18n'
// import ModalContext from './ModalContext'
// import { Provider as ReduxProvider } from 'react-redux'
// import { configureStore } from '@core/stores'

// const ComposeProvider = ({ children }) => {
//   const providers = React.useMemo(
//     () => [
//       [I18nextProvider, { i18n }],
//       [ReduxProvider, { store: configureStore() }],
//       [ThemeProvider, { theme: colors }],
//       ScreenContext,
//       ModalContext
//     ],
//     []
//   )

//   return providers.reduceRight((componentTree, cfg) => {
//     const [Provider, props] = Array.isArray(cfg) ? cfg : [cfg, {}]
//     return <Provider {...props}>{componentTree}</Provider>
//   }, children)
// }

// export default ComposeProvider
