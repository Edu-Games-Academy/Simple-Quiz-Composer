import update from 'immutability-helper'

import { ReactComponent as AddIcon } from '../../assets/svg/add.svg'
import { ReactComponent as CheckedIcon } from '../../assets/svg/checked.svg'
import { ReactComponent as DeleteIcon } from '../../assets/svg/delete.svg'
import { ReactNode } from 'react'
import { Choice, Question, createChoice } from 'sqc-core-functions'
import { Editor } from '../Editor'

export type QuizEditorParams = {
  /** The quiz question object */
  question: Question
  /** Whether richtext mode is enabled */
  richtextMode?: boolean
  /** Function to handle any changes on the question, including adding/editing/removing answers */
  onChange: (question: Question) => void
  /** Warning message component to display */
  warning?: ReactNode
}

const isAnswerTogglable = (answer: Choice) => answer.isCorrect

/**
 * Renders a QuizEditor component with question, answers, and warning.
 */
export const QuizEditor = ({ question, richtextMode, onChange, warning }: QuizEditorParams) => {
  const isAnswerNonRemovable = (answer: Choice) => question.choices.length < 2 || answer.isCorrect

  const handleQuestionUpdate = (value: string) => {
    onChange({
      ...question,
      question: value,
    })
  }
  const handleAnswerUpdate = (index: number, value: string) => {
    onChange(update(question, { choices: { [index]: { answer: { $set: value } } } }))
  }
  const handleAddAnswer = (index: number) => {
    onChange(
      update(question, {
        choices: {
          $splice: [[index + 1, 0, createChoice()]],
        },
      })
    )
  }
  const handleRemoveAnswer = (index: number) => {
    onChange(update(question, { choices: { $splice: [[index, 1]] } }))
  }
  const handleToggleAnswer = (choice: Choice) => {
    onChange(
      update(question, {
        choices: {
          $apply: (x: Choice[]): Choice[] =>
            x.map((c) => ({
              ...c,
              isCorrect: c.id === choice.id,
            })),
        },
      })
    )
  }

  return (
    <div key={question.id}>
      <h2 className='sqc-mb-2 sqc-text-xl sqc-font-semibold'>Question:</h2>
      <Editor value={question.question} onChange={handleQuestionUpdate} richtextMode={richtextMode} />
      {warning}
      <h2 className='sqc-my-2 sqc-text-xl sqc-font-semibold'>Answers:</h2>
      {question.choices.map((choice, index) => (
        <div key={choice.id}>
          <h3 className='sqc-mb-2 sqc-font-semibold sqc-text-l'>
            Answer {index + 1}: {choice.isCorrect && <span className='sqc-text-emerald-500'>Correct</span>}
          </h3>
          <div className='sqc-relative sqc-mb-6'>
            <div className='sqc-absolute sqc-inset-y-0 sqc-left-0 sqc-flex sqc-flex-col sqc-items-center sqc-justify-center sqc-gap-2 sqc-pl-3'>
              <button
                type='button'
                role='toggle-answer'
                aria-disabled={isAnswerTogglable(choice)}
                disabled={isAnswerTogglable(choice)}
                className='sqc-text-slate-400 hover:sqc-rounded-lg hover:sqc-border hover:sqc-bg-emerald-200 disabled:sqc-cursor-not-allowed disabled:sqc-bg-transparent disabled:sqc-text-emerald-400'
                onClick={() => handleToggleAnswer(choice)}
              >
                <CheckedIcon className='sqc-w-8 sqc-h-8' fill='currentColor' />
                <span className='sqc-sr-only'>Mark as correct answer</span>
              </button>
              <button
                type='button'
                role='remove-answer'
                aria-disabled={isAnswerNonRemovable(choice)}
                disabled={isAnswerNonRemovable(choice)}
                className='sqc-text-red-400 hover:sqc-rounded-lg hover:sqc-border hover:sqc-bg-red-200 disabled:sqc-cursor-not-allowed disabled:sqc-bg-transparent'
                onClick={() => handleRemoveAnswer(index)}
              >
                <DeleteIcon className='sqc-w-8 sqc-h-8' fill='currentColor' />
                <span className='sqc-sr-only'>Remove this answer</span>
              </button>
              <button
                type='button'
                role='add-answer'
                onClick={() => handleAddAnswer(index)}
                className='sqc-text-blue-400 hover:sqc-rounded-lg hover:sqc-border hover:sqc-bg-blue-200'
              >
                <AddIcon className='sqc-w-8 sqc-h-8' fill='currentColor' />
                <span className='sqc-sr-only'>Add an answer after</span>
              </button>
            </div>
            <div className='sqc-block sqc-w-full sqc-rounded-lg sqc-border sqc-border-gray-300 sqc-bg-gray-50 sqc-p-2.5 sqc-pl-14 lg:sqc-py-5'>
              <Editor
                value={choice.answer}
                onChange={(val) => handleAnswerUpdate(index, val)}
                richtextMode={richtextMode}
              />
              {warning}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
