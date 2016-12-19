import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { ApolloProvider } from 'react-apollo'
import store from './data/store'
import client from './data/apollo'

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
