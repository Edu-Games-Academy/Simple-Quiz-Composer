import { v4 as uuid } from 'uuid';

export const createChoice = (isCorrect = false) => ({
  id: uuid(),
  answer: '',
  isCorrect,
});

export const createQuestion = () => ({
  id: uuid(),
  question: '',
  choices: [createChoice(true)],
});
