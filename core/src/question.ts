const uid = () => String(Math.random())

export type Choice = {
  id: string
  answer: string
  isCorrect: boolean
}

export type Question = {
  id: string
  question: string
  choices: Choice[]
}

type CreateChoiceParams = Partial<Choice>
type CreateQuestionParams = Partial<Omit<Question, 'choices'> & { choices: CreateChoiceParams[] }>

export const createChoice = ({ id = uid(), answer = '', isCorrect = false }: CreateChoiceParams = {}): Choice => ({
  id,
  answer,
  isCorrect,
})

export const createQuestion = ({
  id = uid(),
  question = '',
  choices = [createChoice({ isCorrect: true })],
}: CreateQuestionParams = {}): Question => ({
  id,
  question,
  choices: choices.map((c) => createChoice(c)),
})
