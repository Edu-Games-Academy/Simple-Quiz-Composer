import { z } from 'zod'

const uid = () => String(Math.random()).substring(2)

/**
 * Zod validation schema for {@link Choice}
 */
export const ChoiceSchema = z.strictObject({
  id: z.string().optional(),
  answer: z.string(),
  isCorrect: z.boolean(),
})

export type Choice = z.infer<typeof ChoiceSchema>

/**
 * Zod validation schema for {@link Question}
 */
export const QuestionSchema = z.strictObject({
  id: z.string().optional(),
  question: z.string(),
  choices: z.array(ChoiceSchema),
})

export type Question = z.infer<typeof QuestionSchema>

type CreateChoiceParams = Partial<Choice>
type CreateQuestionParams = Partial<Omit<Question, 'choices'> & { choices: CreateChoiceParams[] }>

/**
 * Create a Choice object with the given parameters.
 * If no parameters are given, default values will be used.
 * The parameters include an ID, answer, and a boolean that indicates whether or not the choice is correct.
 * The default value of isCorrect is false.
 *
 * @example ```ts
 * const myChoice = createChoice({
 *   answer: 'The answer is 42',
 *   isCorrect: true,
 * });
 * console.log(myChoice); // Output: { id: '<random uuid>', answer: 'The answer is 42', isCorrect: true }
 * ```
 */
export const createChoice = ({ id = uid(), answer = '', isCorrect = false }: CreateChoiceParams = {}): Choice => ({
  id,
  answer,
  isCorrect,
})

/**
 * Create a Question object with the given parameters.
 * If no parameters are given, default values will be used.
 * The parameters include an ID, question, and an array of Choice object.
 * The default awswer is an empty choice which is marked as default correct answer.
 *
 * @example ```ts
 * const myQuestion = createQuestion({
 *   question: 'What is the answer to the ultimate question of life, the universe, and everything?',
 *   choices: [
 *     { answer: 'I dunno', isCorrect: true },
 *     { answer: '12', isCorrect: false },
 *     { answer: '21', isCorrect: false },
 *   ],
 * })
 * console.log(myQuestion);
 * ```
 */
export const createQuestion = ({
  id = uid(),
  question = '',
  choices = [createChoice({ isCorrect: true })],
}: CreateQuestionParams = {}): Question => ({
  id,
  question,
  choices: choices.map((c) => createChoice(c)),
})
