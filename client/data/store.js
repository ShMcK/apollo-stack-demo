import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import client from './apollo'
import thunk from 'redux-thunk'

const middlewareList = [thunk, client.middleware()]

let enhancer
// development mode
if (process.env && process.env.NODE_ENV !== 'production') {
  const { composeWithDevTools } = require('redux-devtools-extension')
  enhancer = composeWithDevTools(
    applyMiddleware(...middlewareList)
  )
// production mode
} else {
  enhancer = applyMiddleware(...middlewareList)
}

const store = createStore(reducers, {}, enhancer)

export default store
