import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button, { BaseButtonProps } from './button'

export default {
  title: 'button组件',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<BaseButtonProps> = (args) => <Button {...args} />

export const button = Template.bind({})
button.args = {
  children: 'default button',
  btnType: 'primary',
}
