import type { Meta, StoryObj } from '@storybook/react'
import { Greeting } from '../src'

const meta = {
  title: 'Components/Greeting',
  component: Greeting,
  tags: ['docsPage'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    message: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Greeting>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Greeting Title',
    message: 'This is a Greeting',
  },
}
