import update from 'immutability-helper'
import { useReducer } from 'react'

import { createQuestion, Question } from 'sqc-core-functions'

export enum QuestionsActions {
  ADD = 'add',
  REMOVE = 'remove',
  UPDATE = 'update',
  REPLACE = 'replace',
}

export const initialQuestions = [createQuestion()]

export type QuestionDispatchAction =
  | {
      type: QuestionsActions.ADD
    }
  | {
      type: QuestionsActions.REMOVE
      index: number
    }
  | {
      type: QuestionsActions.UPDATE
      index: number
      question: Question
    }
  | {
      type: QuestionsActions.REPLACE
      questions: Question[]
    }

const questionsReducer = (state: Question[], action: QuestionDispatchAction) => {
  switch (action.type) {
    case QuestionsActions.ADD:
      return update(state, { $push: [createQuestion()] })
    case QuestionsActions.REMOVE:
      return update(state, { $splice: [[action.index, 1]] })
    case QuestionsActions.UPDATE:
      return update(state, { [action.index]: { $set: action.question } })
    case QuestionsActions.REPLACE:
      return update(state, { $set: action.questions })
  }
}

export const useQuestionReducer = () => {
  const [questions, questionsDispatch] = useReducer(questionsReducer, initialQuestions)
  return { questions, questionsDispatch }
}
