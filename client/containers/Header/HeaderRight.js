import React from 'react'
import Media from 'react-media'
import Hamburger from '../../components/Hamburger'
import styles from './styles'

const leftOptions = (state) => {
  switch (state) {
    case 'loggedIn':
      return <div style={styles.link}>Logout</div>
    default:
      return <div style={styles.login}></div>
  }
}

const HeaderRight = ({ authState }) => (
  <div style={styles.right}>
    <Media query='(min-width: 599px)'>
      {leftOptions(authState)}
    </Media>
    <Media query='(max-width: 600px)'>
      <Hamburger />
    </Media>
  </div>
)

export default HeaderRight
