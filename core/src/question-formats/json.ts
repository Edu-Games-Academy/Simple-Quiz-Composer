import { Question } from '../question'

const importFrom = (text: string): Question[] => {
  return JSON.parse(text)
}

const exportTo = (questions: Question[]) => {
  return JSON.stringify(questions, null, 2)
}

const fileType = 'application/json'
const fileExtension = 'json'

export default { importFrom, exportTo, fileType, fileExtension }
