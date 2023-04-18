import type { Meta, StoryObj } from '@storybook/react'
import { useToastContext, ToastProvider } from './ToastContext'

const meta = {
  title: 'Components/ToastContext',
  component: ToastProvider,
  tags: ['docsPage'],
  argTypes: {
    children: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof ToastProvider>

export default meta
type Story = StoryObj<typeof meta>

const TestComponent = () => {
  const { toast, toastSuccess, toastError } = useToastContext()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <button onClick={() => toast('Default toast message')}>Toast</button>
      <button onClick={() => toastSuccess('Success toast message')}>Toast success</button>
      <button onClick={() => toastError('Error toast message')}>Toast error</button>
    </div>
  )
}

export const Default: Story = {
  args: {
    children: <TestComponent />,
  },
}
