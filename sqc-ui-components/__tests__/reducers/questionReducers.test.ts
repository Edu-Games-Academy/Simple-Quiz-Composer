import { renderHook, act } from '@testing-library/react'
import { reducers } from '../../src'

describe('useQuestionReducer', () => {
  const { questionReducer } = reducers
  const { initialQuestions, Actions, useQuestionReducer } = questionReducer

  test('initial state is set correctly', () => {
    const { result } = renderHook(() => useQuestionReducer())
    expect(result.current.questions).toEqual(initialQuestions)
  })

  test('add question', () => {
    const { result } = renderHook(() => useQuestionReducer())
    const { questionsDispatch } = result.current

    act(() => {
      questionsDispatch({ type: Actions.ADD })
    })

    expect(result.current.questions).toHaveLength(2)
  })

  test('remove question', () => {
    const { result } = renderHook(() => useQuestionReducer())
    const { questionsDispatch } = result.current

    act(() => {
      questionsDispatch({ type: Actions.REMOVE, index: 0 })
    })

    expect(result.current.questions).toHaveLength(0)
  })

  test('update question', () => {
    const { result } = renderHook(() => useQuestionReducer())
    const { questionsDispatch } = result.current

    act(() => {
      questionsDispatch({
        type: Actions.UPDATE,
        index: 0,
        question: {
          id: '1',
          question: 'updated question',
          choices: [{ id: '1.1', answer: 'new answer', isCorrect: true }],
        },
      })
    })

    expect(result.current.questions[0].question).toEqual('updated question')
    expect(result.current.questions[0].choices[0].answer).toEqual('new answer')
    expect(result.current.questions[0].choices[0].isCorrect).toBeTruthy()
  })

  test('replace questions', () => {
    const { result } = renderHook(() => useQuestionReducer())
    const { questionsDispatch } = result.current

    const newQuestions = [
      { id: '1', question: 'new question 1', choices: [{ id: '1.1', answer: 'new answer 1', isCorrect: true }] },
      { id: '2', question: 'new question 2', choices: [{ id: '2.1', answer: 'new answer 2', isCorrect: true }] },
    ]

    act(() => {
      questionsDispatch({ type: Actions.REPLACE, questions: newQuestions })
    })

    expect(result.current.questions).toEqual(newQuestions)
  })
})
