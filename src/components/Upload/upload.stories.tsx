import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Upload, { UploadProps } from './upload'
export default {
  title: 'upload组件',
  component: Upload,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<UploadProps> = (args) => (
  <Upload
    action="http://jsonplaceholder.typicode.com/posts/"
    onProgress={action('progress')}
    onSuccess={action('success')}
    onError={action('error')}
  ></Upload>
)

export const upload = Template.bind({})
upload.args = {}
