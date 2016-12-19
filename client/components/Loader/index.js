import React from 'react'
import styles from './styles'
import { Spin } from 'antd'

const Loader = () => (
  <section style={styles.container}>
    <Spin size='large' />
  </section>
)

export default Loader