import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import Input, { InputProps } from './input'
export default {
  title: 'input组件',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta
const Template: Story<InputProps> = (args) => <Input {...args}></Input>

export const input = Template.bind({})
input.args = {
  style: { width: '300px' },
  defaultValue: '乱写的',
  size: 'lg',
  append: '.com',
  prepend: 'https://',
}
