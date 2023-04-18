import update from 'immutability-helper'
import { useReducer } from 'react'

import { createQuestion, Question } from 'sqc-core-functions'

export enum Actions {
  ADD = 'add',
  REMOVE = 'remove',
  UPDATE = 'update',
  REPLACE = 'replace',
}

export const initialQuestions = [createQuestion()]

export type DispatchAction =
  | {
      type: Actions.ADD
    }
  | {
      type: Actions.REMOVE
      index: number
    }
  | {
      type: Actions.UPDATE
      index: number
      question: Question
    }
  | {
      type: Actions.REPLACE
      questions: Question[]
    }

const questionsReducer = (state: Question[], action: DispatchAction) => {
  switch (action.type) {
    case Actions.ADD:
      return update(state, { $push: [createQuestion()] })
    case Actions.REMOVE:
      return update(state, { $splice: [[action.index, 1]] })
    case Actions.UPDATE:
      return update(state, { [action.index]: { $set: action.question } })
    case Actions.REPLACE:
      return update(state, { $set: action.questions })
  }
}

export const useQuestionReducer = () => {
  const [questions, questionsDispatch] = useReducer(questionsReducer, initialQuestions)
  return { questions, questionsDispatch }
}
