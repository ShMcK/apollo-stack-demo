import React from 'react'
import { Menu, SubMenu } from 'antd'
import styles from './styles'

const SideBar = () => (
  <Menu style={styles.menu}>
    <Menu.Item>Option 1</Menu.Item>
    <Menu.Item>Option 2</Menu.Item>
    <Menu.Item>Option 3</Menu.Item>
  </Menu>
)

export default SideBar
