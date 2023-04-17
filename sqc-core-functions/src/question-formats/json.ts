import { z } from 'zod'
import { Question, QuestionSchema } from '../question'
import { QuestionFormat } from './format'

/**
 * JSON encoded format of {@link Question}
 */
export const json: QuestionFormat = {
  fileType: 'application/json',
  fileExtension: 'json',
  import: (text: string): Question[] => {
    const data = JSON.parse(text)
    const schema = z.array(QuestionSchema)
    return schema.parse(data)
  },
  export: (questions: Question[]) => {
    return JSON.stringify(questions, null, 2)
  },
}
