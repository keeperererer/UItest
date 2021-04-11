import React from 'react'
import { Story, Meta } from '@storybook/react'

import Transition, { TransitionProps } from './transition'

export default {
  title: 'transition组件',
  component: Transition,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TransitionProps> = (args) => (
  <Transition {...args}>
    <span>heeello</span>
  </Transition>
)

export const transition = Template.bind({})
transition.args = {
  timeout: 300,
  animation: 'zoom-in-top',
}
