import React from 'react'
import { Story, Meta } from '@storybook/react'

import Icon, { IconProps } from './icon'

export default {
  title: 'icon组件',
  component: Icon,
} as Meta

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const icon = Template.bind({})
icon.args = {
  theme: 'danger',
  icon: 'coffee',
}
