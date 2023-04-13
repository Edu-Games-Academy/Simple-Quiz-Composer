import { parse } from 'gift-pegjs';

import { createChoice, createQuestion } from '@/methods/question';

const importFrom = (text) => {
  const questions = parse(text).map((q) =>
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

const exportTo = (questions) => {
  return questions.map((q, i) => giftQuestion(i + 1, q)).join('');
};

const fileType = 'text/plain';
const fileExtension = 'txt';

export default { importFrom, exportTo, fileType, fileExtension };
