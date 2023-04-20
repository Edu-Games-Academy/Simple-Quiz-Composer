import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QuestionsProvider, questionReducer, useQuestionsContext } from '../../src'
const { QuestionsActions } = questionReducer

describe('QuestionsProvider', () => {
  it('should initialize context with correct values', () => {
    const TestComponent = () => {
      const { questions, questionsDispatch, selectedQuestion, setSelectedQuestion } = useQuestionsContext()

      expect(questions.length).toEqual(1)
      expect(typeof questionsDispatch).toEqual('function')
      expect(selectedQuestion).toEqual(0)
      expect(typeof setSelectedQuestion).toEqual('function')

      return null
    }

    render(
      <QuestionsProvider>
        <TestComponent />
      </QuestionsProvider>
    )
  })

  it('should render children with correct context action', () => {
    const ChildComponent = () => {
      const { questions, questionsDispatch, selectedQuestion, setSelectedQuestion } = useQuestionsContext()

      return (
        <>
          <div data-testid='length'>{`${questions.length} questions`}</div>
          <div data-testid='selected'>{`Selected question: ${selectedQuestion}`}</div>
          <button onClick={() => setSelectedQuestion(1)}>Select question 2</button>
          <button onClick={() => questionsDispatch({ type: QuestionsActions.ADD })}>Add new question</button>
        </>
      )
    }

    render(
      <QuestionsProvider>
        <ChildComponent />
      </QuestionsProvider>
    )

    expect(screen.getByTestId('length').textContent).toEqual('1 questions')
    expect(screen.getByTestId('selected').textContent).toEqual('Selected question: 0')

    act(() => {
      userEvent.click(screen.getByRole('button', { name: /select question 2/i }))
    })
    expect(screen.getByTestId('selected').textContent).toEqual('Selected question: 1')

    act(() => {
      userEvent.click(screen.getByRole('button', { name: /add new question/i }))
    })
    expect(screen.getByTestId('length').textContent).toEqual('2 questions')
    expect(screen.getByTestId('selected').textContent).toEqual('Selected question: 1')
  })
})
