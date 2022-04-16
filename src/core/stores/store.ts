import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '@core/stores/reducers'

export const store = createStore(reducers, {}, applyMiddleware(thunk))
