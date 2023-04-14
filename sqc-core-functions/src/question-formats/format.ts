import { Question } from '../question'

export type QuestionFormat = {
  /** file MIME type */
  fileType: string
  /** file extension for exporting */
  fileExtension: string
  /**
   * Import questions from plain text
   */
  import: (text: string) => Question[]
  /**
   * Export questions to plain text
   */
  export: (questions: Question[]) => string
}
