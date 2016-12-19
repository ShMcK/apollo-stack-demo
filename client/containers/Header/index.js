import React from 'react'
import './Header.css'

import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

const Header = ({ authState}) => (
  <section className='headerContainer'>
    <HeaderLeft />
    <HeaderRight authState='loggedOut' />
  </section>
)

export default Header
