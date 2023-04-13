import { MultipleChoice, parse } from 'gift-pegjs'

import { Choice, Question, createChoice, createQuestion } from '../question'

const importFrom = (text: string): Question[] => {
  const questions = parse(text).map((q) =>
    createQuestion({
      question: (q as MultipleChoice).stem.text,
      choices: (q as MultipleChoice).choices.map((c) =>
        createChoice({
          answer: c.text.text,
          isCorrect: c.isCorrect,
        })
      ),
    })
  )
  return questions
}

const escapeMoodleStr = (str: string) => str.replaceAll(/[~=#{}:\\]/g, '\\$&')

const giftQuestion = (index: number, question: Question) => {
  const text = escapeMoodleStr(question.question)
  const answers = (choices: Choice[]) =>
    choices.map((c) => `${c.isCorrect ? '=' : '~'}${escapeMoodleStr(c.answer)}`).join('\n')

  return `
// question ${index}
[html]${text} {
${answers(question.choices)}
}
`
}

const exportTo = (questions: Question[]) => {
  return questions.map((q, i) => giftQuestion(i + 1, q)).join('')
}

const fileType = 'text/plain'
const fileExtension = 'txt'

export default { importFrom, exportTo, fileType, fileExtension }
