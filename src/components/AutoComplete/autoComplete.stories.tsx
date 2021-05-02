import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import AutoComplete from './index'
import { AutoCompleteProps } from './autoComplete'
export default {
  title: 'autoComplete组件',
  component: AutoComplete,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta
const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      console.log(items)
      return items
        .slice(0, 10)
        .map((item: any) => ({ value: item.login, ...item }))
    })
}
const Template: Story<AutoCompleteProps> = (args) => (
  <AutoComplete fetchSuggestions={handleFetch}></AutoComplete>
)

export const autoComplete = Template.bind({})
autoComplete.args = {
  style: { width: '300px' },
}
