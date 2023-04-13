import { v4 as uuid } from 'uuid';

export const createChoice = ({ answer = '', isCorrect = false } = {}) => ({
  id: uuid(),
  answer,
  isCorrect,
});

export const createQuestion = ({
  question = '',
  choices = [createChoice({ isCorrect: true })],
} = {}) => ({
  id: uuid(),
  question,
  choices,
});
