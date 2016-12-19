import React from 'react'
import styles from './styles'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

const Header = ({ authState}) => (
  <section style={styles.container}>
    <HeaderLeft />
    <HeaderRight authState='loggedOut' />
  </section>
)

export default Header
