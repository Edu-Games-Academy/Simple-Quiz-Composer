import format from '../../src/question-formats/gift'
import { inputQuestions, expectedQuestions } from './common'

const plainText = `
// question 1
[html]What is the capital of France \\~\\=\\#\\{\\}\\:\\\\?{
=Paris
~London
~Madrid
~Berlin
}

// question 2
[html]*What is 2 + 2?{
~*3
=*4
~5
~6
}
`

describe('GIFT Format', () => {
  it('should import questions from plain text', () => {
    const result = format.import(plainText)
    expect(result).toEqual(expectedQuestions)
  })

  it('should export questions to plain text', () => {
    const result = format.export(inputQuestions)
    expect(result).toEqual(plainText)
  })
})
