import { questionFormats } from '../../src'
import { inputQuestions, expectedQuestions } from './common'

const format = questionFormats.qal

const plainText = `// question 1
What is the capital of France ~=#{}:\\?
*Paris
 London
 Madrid
 Berlin

// question 2
*What is 2 + 2?
 *3
**4
 5
 6`

describe('QuestionAnswerLine Format', () => {
  it('should import questions from plain text', () => {
    const result = format.import(plainText)
    expect(result).toEqual(expectedQuestions)
  })

  it('should export questions to plain text', () => {
    const result = format.export(inputQuestions)
    expect(result).toEqual(plainText)
  })
})
