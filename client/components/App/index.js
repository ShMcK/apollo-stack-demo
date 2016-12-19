import React from 'react'
import Header from '../../containers/Header'
import Posts from '../../containers/Posts'
import styles from './styles'

const App = () => (
  <div style={styles.app}>
    <Header />
    <Posts />
  </div>
)

export default App
