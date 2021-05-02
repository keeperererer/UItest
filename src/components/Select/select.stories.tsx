import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Select, BaseSelectProps } from './select'

export default {
  title: 'select组件',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<BaseSelectProps> = (args) => <Select {...args} />

export const select = Template.bind({})
select.args = {
  options: ['1', '2', '3'],
  defaultSelectedOptions: ['1'],
}
