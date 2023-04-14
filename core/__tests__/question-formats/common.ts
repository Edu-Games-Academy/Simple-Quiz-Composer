const questions = [
  {
    question: 'What is the capital of France ~=#{}:\\?',
    choices: [
      { answer: 'Paris', isCorrect: true },
      { answer: 'London', isCorrect: false },
      { answer: 'Madrid', isCorrect: false },
      { answer: 'Berlin', isCorrect: false },
    ],
  },
  {
    question: '*What is 2 + 2?',
    choices: [
      { answer: '*3', isCorrect: false },
      { answer: '*4', isCorrect: true },
      { answer: '5', isCorrect: false },
      { answer: '6', isCorrect: false },
    ],
  },
]

export const expectedQuestions = questions.map((q) => ({
  id: expect.any(String),
  question: q.question,
  choices: q.choices.map((c) => ({
    ...c,
    id: expect.any(String),
  })),
}))

export const inputQuestions = questions.map((q, i) => ({
  id: i.toString(),
  question: q.question,
  choices: q.choices.map((c, j) => ({
    ...c,
    id: `${i}.${j}`,
  })),
}))
