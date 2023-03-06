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

export const json2gift = (json) => {
  return json
    .map(
      (q, i) => `
// question ${i + 1}
::${q.question.substr(0, 100)}::${q.question}{
${q.choices.map((c) => `${c.isCorrect ? '=' : '~'}${c.answer}`).join('\n')}
}
`,
    )
    .join('');
};
