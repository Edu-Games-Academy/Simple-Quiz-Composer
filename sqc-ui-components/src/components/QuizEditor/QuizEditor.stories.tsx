import type { Meta, StoryObj } from '@storybook/react'
import { QuizEditor } from './QuizEditor'
import { testQuestions } from '__tests__/_common/question'
import { createQuestion } from 'sqc-core-functions'

const meta = {
  title: 'Components/QuizEditor',
  component: QuizEditor,
  tags: ['docsPage'],
  argTypes: {
    question: {
      control: { type: 'object' },
    },
    richtextMode: {
      control: { type: 'boolean' },
    },
    onChange: {
      control: { type: 'function' },
    },
    warning: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof QuizEditor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    question: createQuestion(),
  },
}
export const RawMode: Story = {
  args: {
    question: createQuestion(),
    richtextMode: false,
  },
}
export const HasQuestion: Story = {
  args: {
    question: testQuestions[0],
  },
}
export const HasQuestionWithWarning: Story = {
  args: {
    question: testQuestions[0],
    warning: <div>Warning</div>,
  },
}
