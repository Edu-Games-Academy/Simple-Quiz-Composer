import { Question } from '../question'
import { QuestionFormat } from './format'

const format: QuestionFormat = {
  fileType: 'application/json',
  fileExtension: 'json',
  import: (text: string): Question[] => {
    return JSON.parse(text)
  },
  export: (questions: Question[]) => {
    return JSON.stringify(questions, null, 2)
  },
}

/**
 * JSON encoded format of {@link Question}
 */
export default format
