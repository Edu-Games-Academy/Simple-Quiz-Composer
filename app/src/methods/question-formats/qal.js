import { createChoice, createQuestion } from '@/methods/question';

const parseQuestion = (text) => {
  const [question, ...answers] = text
    .split('\n')
    .filter((line) => !line.startsWith('//'));

  const choices = answers.map((answer) => {
    const isCorrect = answer.startsWith('*');
    return createChoice({
      answer: (isCorrect ? answer.slice(1) : answer).trim(),
      isCorrect,
    });
  });

  return createQuestion({
    question: question.trim(),
    choices,
  });
};

const importFrom = (text) => {
  return text.split('\n\n').map(parseQuestion);
};

const formatQuestion = (question, idx) => {
  const answers = question.choices.map((answer) =>
    answer.isCorrect ? `*${answer.answer}` : ` ${answer.answer}`,
  );
  return `// question ${idx + 1}\n${question.question}\n${answers.join('\n')}`;
};

const exportTo = (questions) => {
  return questions.map(formatQuestion).join('\n\n');
};

const fileType = 'text/plain';
const fileExtension = 'txt';

export default { importFrom, exportTo, fileType, fileExtension };
