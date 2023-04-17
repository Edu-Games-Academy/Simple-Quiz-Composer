import { questionFormats } from '../../src'
import { inputQuestions, expectedQuestions } from './common'

const format = questionFormats.json

const plainText = `[
  {
    "id": "0",
    "question": "What is the capital of France ~=#{}:\\\\?",
    "choices": [
      {
        "answer": "Paris",
        "isCorrect": true,
        "id": "0.0"
      },
      {
        "answer": "London",
        "isCorrect": false,
        "id": "0.1"
      },
      {
        "answer": "Madrid",
        "isCorrect": false,
        "id": "0.2"
      },
      {
        "answer": "Berlin",
        "isCorrect": false,
        "id": "0.3"
      }
    ]
  },
  {
    "id": "1",
    "question": "*What is 2 + 2?",
    "choices": [
      {
        "answer": "*3",
        "isCorrect": false,
        "id": "1.0"
      },
      {
        "answer": "*4",
        "isCorrect": true,
        "id": "1.1"
      },
      {
        "answer": "5",
        "isCorrect": false,
        "id": "1.2"
      },
      {
        "answer": "6",
        "isCorrect": false,
        "id": "1.3"
      }
    ]
  }
]`

describe('JSON Format', () => {
  it('should import questions from plain text', () => {
    const result = format.import(plainText)
    expect(result).toEqual(expectedQuestions)
  })

  it('should export questions to plain text', () => {
    const result = format.export(inputQuestions)
    expect(result).toEqual(plainText)
  })

  it('should handle incorrect JSON values', () => {
    const inputs = [
      JSON.stringify([
        {
          a: '1',
          b: 2,
        },
      ]),
      JSON.stringify([
        {
          question: '1',
          answer: '2',
        },
      ]),
      JSON.stringify([
        {
          question: '1',
          choices: [{ answer: '*3', isCorrect: false }],
          redundant: true,
        },
      ]),
    ]
    inputs.forEach((input) => {
      expect(() => format.import(input)).toThrowError()
    })
  })

  it('should handle correct JSON values without IDs', () => {
    const questions = [
      {
        question: '1',
        choices: [{ answer: '*3', isCorrect: false }],
      },
    ]
    expect(format.import(JSON.stringify(questions))).toMatchObject(questions)
  })
})
