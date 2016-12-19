import React from 'react'
import styles from './styles'

const leftOptions = (state) => {
  switch (state) {
    case 'loggedIn':
      return <span style={styles.link}>Logout</span>
    default:
      return <span style={styles.link}>Login</span>
  }
}

const HeaderRight = ({ authState }) => (
  <div style={styles.right}>
    {leftOptions(authState)}
  </div>
)

export default HeaderRight
