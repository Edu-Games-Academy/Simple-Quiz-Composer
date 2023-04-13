import { createChoice, createQuestion } from '../src/question'

describe('Create Choice', () => {
  it('should create a choice without param', () => {
    const output = createChoice()
    expect(output).toHaveProperty('id')
    expect(output).toHaveProperty('answer')
    expect(output).toHaveProperty('isCorrect', false)
  })
  it('should create a choice with full params', () => {
    const input = { id: 'aaa', answer: 'hello', isCorrect: true }
    const output = createChoice(input)
    expect(output.id).toEqual(input.id)
    expect(output.answer).toEqual(input.answer)
    expect(output.isCorrect).toEqual(input.isCorrect)
  })
  it('should create a choice with full params except ID', () => {
    const input = { answer: 'hello', isCorrect: true }
    const output = createChoice(input)
    expect(output).toHaveProperty('id')
    expect(output.answer).toEqual(input.answer)
    expect(output.isCorrect).toEqual(input.isCorrect)
  })
})

describe('Create Question', () => {
  it('should create a question without param', () => {
    const output = createQuestion()
    expect(output).toHaveProperty('id')
    expect(output.choices.length).toEqual(1)
    expect(output.choices[0].isCorrect).toEqual(true)
  })
  it('should create a question with only question', () => {
    const input = { question: 'hello' }
    const output = createQuestion(input)
    expect(output).toHaveProperty('id')
    expect(output.question).toEqual(input.question)
    expect(output.choices.length).toEqual(1)
    expect(output.choices[0].isCorrect).toEqual(true)
  })
  it('should create a question with full params', () => {
    const input = { id: 'aaa', question: 'hello', choices: [{ id: 'bbb', answer: 'hello', isCorrect: true }] }
    const output = createQuestion(input)
    expect(output.id).toEqual(input.id)
    expect(output.question).toEqual(input.question)
    expect(output.choices).toEqual(input.choices)
  })
  it('should create a question with full params except IDs', () => {
    const input = {
      question: 'hello',
      choices: [
        { answer: 'hello', isCorrect: true },
        { answer: 'hello', isCorrect: false },
      ],
    }
    const output = createQuestion(input)
    expect(output).toHaveProperty('id')
    expect(output.question).toEqual(input.question)
    expect(output.choices.length).toEqual(2)
    expect(output.choices[0]).toHaveProperty('id')
    expect(output.choices[1]).toHaveProperty('id')
  })
})
