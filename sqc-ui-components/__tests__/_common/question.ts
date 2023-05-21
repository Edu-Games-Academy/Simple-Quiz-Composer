import { Question } from 'sqc-core-functions'

export const testQuestions = [
  {
    question: 'What is the capital of France ~=#{}:\\?',
    choices: [
      { id: '1.1', answer: 'Paris', isCorrect: true },
      { id: '1.2', answer: 'London', isCorrect: false },
      { id: '1.3', answer: 'Madrid', isCorrect: false },
      { id: '1.4', answer: 'Berlin', isCorrect: false },
    ],
  },
  {
    question: '*What is 2 + 2?',
    choices: [
      { id: '2.1', answer: '*3', isCorrect: false },
      { id: '2.2', answer: '*4', isCorrect: true },
      { id: '2.3', answer: '5', isCorrect: false },
      { id: '2.4', answer: '6', isCorrect: false },
    ],
  },
] satisfies Question[]
