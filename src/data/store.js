import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './reducers'
import client from './apollo'

const middlewares = [client.middleware()]

const middleware = compose(
  applyMiddleware(...middlewares),
)

const store = createStore(reducers, {}, middleware)

export default store
