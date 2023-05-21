import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { QuizEditor } from '../../src'
import { testQuestions } from '../_common/question'

describe('QuizEditor', () => {
  test('QuizEditor should render question and answers correctly', () => {
    const onChange = jest.fn()
    const { getByText, getAllByRole, getAllByText } = render(
      <QuizEditor question={testQuestions[0]} onChange={onChange} />
    )
    expect(getByText('Question:')).toBeInTheDocument()
    expect(getByText('What is the capital of France ~=#{}:\\?')).toBeInTheDocument()
    expect(getByText('Answers:')).toBeInTheDocument()
    expect(getByText('Answer 1:')).toBeInTheDocument()
    expect(getByText('Answer 2:')).toBeInTheDocument()
    expect(getByText('Answer 3:')).toBeInTheDocument()
    expect(getByText('Answer 4:')).toBeInTheDocument()
    expect(getAllByText('Correct')).toHaveLength(1)
    expect(getAllByRole('textbox')).toHaveLength(5)
  })

  test('QuizEditor should render warning message when warning prop is provided', () => {
    const onChange = jest.fn()
    const warningMessage = 'This is a warning message.'
    const warning = <div>{warningMessage}</div>
    const { getAllByText } = render(<QuizEditor question={testQuestions[0]} onChange={onChange} warning={warning} />)
    expect(getAllByText(warningMessage)).toHaveLength(5)
  })

  test('QuizEditor calls onChange with correct value on question update', () => {
    const onChange = jest.fn()
    const { getAllByRole } = render(<QuizEditor richtextMode={false} question={testQuestions[0]} onChange={onChange} />)
    const textBoxes = getAllByRole('textbox')
    fireEvent.change(textBoxes[0], { target: { value: 'test' } })
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith({
      ...testQuestions[0],
      question: 'test',
    })
  })

  test('QuizEditor calls onChange with correct value on answer update', () => {
    const onChange = jest.fn()
    const { getAllByRole } = render(<QuizEditor richtextMode={false} question={testQuestions[0]} onChange={onChange} />)
    const textBoxes = getAllByRole('textbox')
    fireEvent.change(textBoxes[1], { target: { value: 'test' } })
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        choices: expect.arrayContaining([
          expect.objectContaining({
            answer: 'test',
          }),
        ]),
      })
    )
  })

  test('QuizEditor calls onChange with correct value on adding answer', () => {
    const onChange = jest.fn()
    const { getAllByRole } = render(<QuizEditor richtextMode={false} question={testQuestions[0]} onChange={onChange} />)
    const addBtns = getAllByRole('add-answer')
    fireEvent.click(addBtns[0])
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        choices: expect.arrayContaining([
          expect.objectContaining({
            answer: '',
            isCorrect: false,
          }),
        ]),
      })
    )
    expect(onChange.mock.calls[0][0].choices.length).toBe(5)
  })

  test('QuizEditor calls onChange with correct value on removing answer', () => {
    const onChange = jest.fn()
    const { getAllByRole } = render(<QuizEditor richtextMode={false} question={testQuestions[0]} onChange={onChange} />)
    const removeBtns = getAllByRole('remove-answer')
    // cannot remove correct answer
    fireEvent.click(removeBtns[0])
    expect(onChange).toHaveBeenCalledTimes(0)
    // remove incorrect answer
    fireEvent.click(removeBtns[1])
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange.mock.calls[0][0].choices.length).toBe(3)
  })

  test('QuizEditor calls onChange with correct value on toggling answer', () => {
    const onChange = jest.fn()
    const { getAllByRole } = render(<QuizEditor richtextMode={false} question={testQuestions[0]} onChange={onChange} />)
    const toggleBtns = getAllByRole('toggle-answer')
    // cannot toggle correct answer
    fireEvent.click(toggleBtns[0])
    expect(onChange).toHaveBeenCalledTimes(0)
    // toggle incorrect answer
    fireEvent.click(toggleBtns[1])
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        choices: [
          expect.objectContaining({
            id: '1.1',
            isCorrect: false,
          }),
          expect.objectContaining({
            id: '1.2',
            isCorrect: true,
          }),
          expect.objectContaining({
            id: '1.3',
            isCorrect: false,
          }),
          expect.objectContaining({
            id: '1.4',
            isCorrect: false,
          }),
        ],
      })
    )
  })
})
