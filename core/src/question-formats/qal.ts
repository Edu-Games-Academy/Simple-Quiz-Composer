import { Question, createChoice, createQuestion } from '../question'
import { QuestionFormat } from './format'

const parseQuestion = (text: string) => {
  const [question, ...answers] = text.split('\n').filter((line) => !line.startsWith('//'))

  const choices = answers.map((answer) => {
    const isCorrect = answer.startsWith('*')
    return createChoice({
      answer: (isCorrect ? answer.slice(1) : answer).trim(),
      isCorrect,
    })
  })

  return createQuestion({
    question: question.trim(),
    choices,
  })
}

const formatQuestion = (question: Question, idx: number) => {
  const answers = question.choices.map((answer) => (answer.isCorrect ? `*${answer.answer}` : ` ${answer.answer}`))
  return `// question ${idx + 1}\n${question.question}\n${answers.join('\n')}`
}

const format: QuestionFormat = {
  fileType: 'text/plain',
  fileExtension: 'txt',
  import: (text: string): Question[] => {
    return text.split('\n\n').map(parseQuestion)
  },
  export: (questions: Question[]) => {
    return questions.map(formatQuestion).join('\n\n')
  },
}

export default format
