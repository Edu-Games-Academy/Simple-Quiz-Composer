import { Meta, StoryObj } from '@storybook/react'
import { testQuestions } from '__tests__/_common/question'
import { getRandomNumber } from '__tests__/_common/utils'
import { useEffect } from 'react'
import { createChoice, createQuestion } from 'sqc-core-functions'
import { QuestionsActions, initialQuestions } from 'src/reducers/questionReducer'
import { QuestionsProvider, useQuestionsContext } from './QuestionsContext'

const meta = {
  title: 'Components/QuestionsContext',
  component: QuestionsProvider,
  tags: ['docsPage'],
  argTypes: {
    children: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof QuestionsProvider>

export default meta
type Story = StoryObj<typeof meta>

const ChildComponent = () => {
  const { questions, selectedQuestion, setSelectedQuestion, questionsDispatch } = useQuestionsContext()
  const styles: React.CSSProperties = {
    border: 'solid 1px black',
    margin: 4,
  }

  useEffect(() => {
    questionsDispatch({
      type: QuestionsActions.REPLACE,
      questions: [
        createQuestion({
          id: '1',
          choices: [createChoice({ id: '1.1', isCorrect: true })],
        }),
      ],
    })
  }, [])

  return (
    <>
      <button style={styles} onClick={() => setSelectedQuestion(getRandomNumber(questions.length))}>
        Change question
      </button>
      <button
        style={styles}
        onClick={() => questionsDispatch({ type: QuestionsActions.REPLACE, questions: initialQuestions })}
      >
        Reset questions
      </button>
      <button
        style={styles}
        onClick={() => questionsDispatch({ type: QuestionsActions.REPLACE, questions: testQuestions })}
      >
        Load questions
      </button>
      <button style={styles} onClick={() => questionsDispatch({ type: QuestionsActions.ADD })}>
        Add question
      </button>
      <button
        style={styles}
        onClick={() =>
          questionsDispatch({
            type: QuestionsActions.UPDATE,
            index: 0,
            question: createQuestion({ question: 'New question' }),
          })
        }
      >
        Update first
      </button>
      <button style={styles} onClick={() => questionsDispatch({ type: QuestionsActions.REMOVE, index: 0 })}>
        Remove first
      </button>
      <div>Selected question: {selectedQuestion}</div>
      <div>
        <pre>{JSON.stringify(questions[selectedQuestion])}</pre>
      </div>
      <div>
        <pre>{JSON.stringify(questions, null, 2)}</pre>
      </div>
    </>
  )
}

export const Default: Story = {
  args: {
    children: <ChildComponent />,
  },
}
