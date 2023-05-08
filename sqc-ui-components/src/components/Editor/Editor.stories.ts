import type { Meta, StoryObj } from '@storybook/react'
import { Editor } from './Editor'

const meta = {
  title: 'Components/Editor',
  component: Editor,
  tags: ['docsPage'],
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    richtextMode: {
      control: { type: 'boolean' },
    },
    onChange: {
      control: { type: 'function' },
    },
  },
} satisfies Meta<typeof Editor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'Editor default',
  },
}
export const RichtextOff: Story = {
  args: {
    value: 'RichText mode Off',
    richtextMode: false,
  },
}
