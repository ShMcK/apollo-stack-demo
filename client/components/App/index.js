import React from 'react'
import Header from '../../containers/Header'
import SideBar from '../SideBar'
import Crumb from '../Crumb'
import Posts from '../../containers/Posts'
import styles from './styles'

const App = () => (
  <div style={styles.app}>
    <Header />
    <section style={styles.body}>
      <section style={styles.side}>
        <SideBar />
      </section>
      <section style={styles.main}>
        <Crumb />
        <br />
        <Posts />
      </section>
    </section>
  </div>
)

export default App
