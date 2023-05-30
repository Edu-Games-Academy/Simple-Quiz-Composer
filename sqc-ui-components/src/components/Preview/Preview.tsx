import hljs from 'highlight.js'

import { ReactComponent as CheckedIcon } from '../../assets/svg/checked.svg'
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg'
import { Question } from 'sqc-core-functions'

const Answer = ({ answer, isCorrect, className }: { answer: string; isCorrect: boolean; className: string }) => (
  <li className={`${className} sqc-flex sqc-w-full sqc-items-center sqc-gap-2 sqc-p-2`}>
    {isCorrect ? (
      <CheckedIcon className='sqc-h-5 sqc-w-5 sqc-text-green-400' fill='currentColor' />
    ) : (
      <CloseIcon className='sqc-h-5 sqc-w-5 sqc-text-red-400' fill='currentColor' />
    )}
    <span
      dangerouslySetInnerHTML={{
        __html: answer,
      }}
    />
  </li>
)

export type PreviewParams = { question: Question }

/**
 * A preview component that displays a rendered view of a question, its choices, and a highlightable code snippet of the question.
 */
export function Preview({ question }: PreviewParams) {
  return (
    <div>
      <h5 className='sqc-text-xl sqc-font-semibold sqc-tracking-tight sqc-text-gray-900'>Rendered:</h5>

      <div className='quiz sqc-my-4 sqc-w-full sqc-rounded-lg sqc-border sqc-border-gray-200'>
        <div
          className='sqc-block sqc-w-full sqc-rounded-t-lg sqc-border-b sqc-border-gray-200 sqc-bg-slate-200 sqc-px-4 sqc-py-2'
          dangerouslySetInnerHTML={{ __html: question.question }}
        />
        <ul>
          {question.choices.slice(0, question.choices.length - 1).map((choice, index) => (
            <Answer
              key={index}
              answer={choice.answer}
              isCorrect={choice.isCorrect}
              className='sqc-border-b sqc-border-gray-200'
            />
          ))}
          <Answer
            answer={question.choices[question.choices.length - 1]?.answer}
            isCorrect={question.choices[question.choices.length - 1]?.isCorrect}
            className='sqc-rounded-b-lg'
          />
        </ul>
      </div>

      <h5 className='sqc-text-xl sqc-font-semibold sqc-tracking-tight sqc-text-gray-900'>Code:</h5>
      <div className='sqc-w-full sqc-overflow-scroll sqc-rounded-sm sqc-bg-slate-700 sqc-p-2'>
        <pre role='generated-code'>
          <code
            dangerouslySetInnerHTML={{
              __html: hljs.highlight(JSON.stringify(question, null, 2), {
                language: 'json',
              }).value,
            }}
          />
        </pre>
      </div>
    </div>
  )
}
