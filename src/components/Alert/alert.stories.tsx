import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Alert, BaseAlertProps } from './alert'

export default {
  title: 'alert组件',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<BaseAlertProps> = (args) => <Alert {...args} />

export const alert = Template.bind({})
alert.args = {
  children: 'default alert',
  title: 'hi',
}
export const WithoutTitle = Template.bind({})
WithoutTitle.args = {
  closable: true,
  type: 'danger',
  children: 'alert message body.',
}
