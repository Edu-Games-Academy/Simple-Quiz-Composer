import update from 'immutability-helper'
import { useReducer } from 'react'

import { createQuestion, Question } from 'sqc-core-functions'

export enum QuestionsActions {
  /** Add an empty question to the end of the list */
  ADD = 'add',
  /** Remove the question at specified index */
  REMOVE = 'remove',
  /** Update the question at specified index */
  UPDATE = 'update',
  /** Replace the whole question list */
  REPLACE = 'replace',
}

/**
 * Initial question list when first loading the page.
 * Containing an empty question
 */
export const initialQuestions = [createQuestion()]

/**
 * Dispatch event for question store.
 * @see {@link QuestionsActions}
 */
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

/**
 * Hook returns current question store and a dispatcher
 */
export const useQuestionReducer = () => {
  const [questions, questionsDispatch] = useReducer(questionsReducer, initialQuestions)
  return { questions, questionsDispatch }
}
