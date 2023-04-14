import { Question } from '../question'

export type QuestionFormat = {
  fileType: string
  fileExtension: string
  import: (text: string) => Question[]
  export: (questions: Question[]) => string
}
