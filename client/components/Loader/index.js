import React from 'react'
import './Loader.css'
import { Spin } from 'antd'

const Loader = () => (
  <section className='loaderContainer'>
    <Spin size='large' />
  </section>
)

export default Loader