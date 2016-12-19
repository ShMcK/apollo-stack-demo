import React from 'react'
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
    {leftOptions(authState)}
  </div>
)

export default HeaderRight
