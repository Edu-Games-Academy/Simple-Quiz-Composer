import { parse } from 'gift-pegjs';

import { createChoice, createQuestion } from './question';

export const gift2json = (txt) => {
  const questions = parse(txt).map((q) =>
    createQuestion({
      question: q.stem.text,
      choices: q.choices.map((c) =>
        createChoice({
          answer: c.text.text,
          isCorrect: c.isCorrect,
        }),
      ),
    }),
  );
  return questions;
};

const escapeMoodleStr = (str) => str.replaceAll(/[~=#{}:\\]/g, '\\$&');

const giftQuestion = (index, question) => {
  const text = escapeMoodleStr(question.question);
  const answers = (choices) =>
    choices
      .map((c) => `${c.isCorrect ? '=' : '~'}${escapeMoodleStr(c.answer)}`)
      .join('\n');

  return `
// question ${index}
[html]${text} {
${answers(question.choices)}
}
`;
};

export const json2gift = (json) => {
  return json.map((q, i) => giftQuestion(i + 1, q)).join('');
};
