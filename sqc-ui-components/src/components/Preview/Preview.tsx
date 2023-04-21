import hljs from 'highlight.js'

import { ReactComponent as CheckedIcon } from '../../assets/svg/checked.svg'
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg'
import { Question } from 'sqc-core-functions'

const Answer = ({ answer, isCorrect, className }: { answer: string; isCorrect: boolean; className: string }) => (
  <li className={`${className} flex w-full items-center gap-2 p-2`}>
    {isCorrect ? (
      <CheckedIcon className='h-5 w-5 text-green-400' fill='currentColor' />
    ) : (
      <CloseIcon className='h-5 w-5 text-red-400' fill='currentColor' />
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
      <h5 className='text-xl font-semibold tracking-tight text-gray-900'>Rendered:</h5>

      <div className='quiz my-4 w-full rounded-lg border border-gray-200'>
        <div
          className='block w-full rounded-t-lg border-b border-gray-200 bg-slate-200 px-4 py-2 '
          dangerouslySetInnerHTML={{ __html: question.question }}
        />
        <ul>
          {question.choices.slice(0, question.choices.length - 1).map((choice, index) => (
            <Answer
              key={index}
              answer={choice.answer}
              isCorrect={choice.isCorrect}
              className='border-b border-gray-200'
            />
          ))}
          <Answer
            answer={question.choices[question.choices.length - 1]?.answer}
            isCorrect={question.choices[question.choices.length - 1]?.isCorrect}
            className='rounded-b-lg'
          />
        </ul>
      </div>

      <h5 className='text-xl font-semibold tracking-tight text-gray-900'>Code:</h5>
      <div className='w-full overflow-scroll rounded-sm bg-slate-700 p-2'>
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
