import React from 'react'
import { Story, Meta } from '@storybook/react'

import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
export default {
  title: 'menu组件',
  component: Menu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<MenuProps> = (args) => (
  <Menu {...args}>
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>cool link2</MenuItem>
      <MenuItem>cool link12</MenuItem>
    </SubMenu>
  </Menu>
)

export const menu = Template.bind({})
menu.args = {
  defaultIndex: '0',
}
