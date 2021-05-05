import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Tabs, TabProps } from './tabs'
import TabsItem from './tabs-item'
export default {
  title: 'tabs组件',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TabProps> = (args) => (
  <Tabs defaultIndex={1} styleType="underline" onSelect={() => {}} {...args}>
    <TabsItem label="card1">this is card one</TabsItem>
    <TabsItem label="card2">this is content two</TabsItem>
    <TabsItem label="disabled" disabled={true}>
      this is content three
    </TabsItem>
  </Tabs>
)

export const tabs = Template.bind({})
tabs.args = {}
