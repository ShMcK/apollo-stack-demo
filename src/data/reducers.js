import { combineReducers } from 'redux'
import client from './apollo'

export default combineReducers({
  apollo: client.reducer()
})
