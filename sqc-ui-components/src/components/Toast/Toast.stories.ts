import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['docsPage'],
  argTypes: {
    type: {
      control: { type: 'text' },
    },
    text: {
      control: { type: 'text' },
    },
    onClose: {
      control: { type: 'function' },
    },
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Toast default',
  },
}
export const DefaultWithAction: Story = {
  args: {
    text: 'Toast default',
    onClose: () => alert('Clicked'),
  },
}
export const Success: Story = {
  args: {
    type: 'success',
    text: 'Toast success',
  },
}
export const Error: Story = {
  args: {
    type: 'error',
    text: 'Toast default',
  },
}
