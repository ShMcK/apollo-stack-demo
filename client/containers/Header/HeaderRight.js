import React from 'react'

const leftOptions = (state) => {
  switch (state) {
    case 'loggedIn':
      return <span>Logout</span>
    default:
      return <span>Login</span>
  }
}

const HeaderRight = ({ authState }) => (
  <div className='headerRight'>
    {leftOptions(authState)}
  </div>
)

export default HeaderRight
