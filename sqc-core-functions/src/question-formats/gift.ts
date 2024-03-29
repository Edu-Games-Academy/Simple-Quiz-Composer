import { MultipleChoice, parse } from 'gift-pegjs'

import { Choice, Question, createChoice, createQuestion } from '../question'
import { QuestionFormat } from './format'

const escapeMoodleStr = (str: string) => str.trim().replaceAll(/[~=#{}:\\]/g, '\\$&')

const createGiftQuestion = (index: number, question: Question) => {
  const text = escapeMoodleStr(question.question)
  const answers = (choices: Choice[]) =>
    choices.map((c) => `${c.isCorrect ? '=' : '~'}${escapeMoodleStr(c.answer)}`).join('\n')

  return `
// question ${index}
[html]${text}{
${answers(question.choices)}
}
`
}

/**
 * Moodle GIFT format
 */
export const gift: QuestionFormat = {
  fileType: 'text/plain',
  fileExtension: 'txt',
  import: (text: string): Question[] => {
    const questions = parse(text).map((q) =>
      createQuestion({
        question: (q as MultipleChoice).stem.text.trim(),
        choices: (q as MultipleChoice).choices.map((c) =>
          createChoice({
            answer: c.text.text.trim(),
            isCorrect: c.isCorrect,
          })
        ),
      })
    )
    return questions
  },
  export: (questions: Question[]) => {
    return questions.map((q, i) => createGiftQuestion(i + 1, q)).join('')
  },
}
