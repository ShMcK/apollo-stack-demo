import React from 'react'
import Media from 'react-media'
import Header from '../../containers/Header'
import SideBar from '../SideBar'
import Crumb from '../Crumb'
import Posts from '../../containers/Posts'
import styles from './styles'

const App = () => (
  <div style={styles.app}>
    <Header />
    <section style={styles.body}>
      <Media style={styles.side} query="(min-width: 599px)">
        <SideBar />
      </Media>
      <section style={styles.main}>
        <Crumb />
        <br />
        <Posts />
      </section>
    </section>
  </div>
)

export default App
