import update from 'immutability-helper';
import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as AddIcon } from '@/assets/svg/add.svg';
import { ReactComponent as CheckedIcon } from '@/assets/svg/checked.svg';
import { ReactComponent as DeleteIcon } from '@/assets/svg/delete.svg';
import Editor from '@/components/Editor';
import { createChoice } from '@/methods/question';

function RichtextQuestion({ question, onChange }) {
  const isAnswerNonRemovable = (answer) =>
    question.choices.length < 2 || answer.isCorrect;

  const isAnswerTogglable = (answer) => answer.isCorrect;

  const handleQuestionUpdate = (value) => {
    onChange({
      ...question,
      question: value,
    });
  };
  const handleAnswerUpdate = (index, value) => {
    onChange(
      update(question, { choices: { [index]: { answer: { $set: value } } } }),
    );
  };
  const handleAddAnswer = (index) => {
    onChange(
      update(question, {
        choices: {
          $splice: [[index + 1, 0, createChoice()]],
        },
      }),
    );
  };
  const handleRemoveAnswer = (index) => {
    onChange(update(question, { choices: { $splice: [[index, 1]] } }));
  };
  const handleToggleAnswer = (choice) => {
    onChange(
      update(question, {
        choices: {
          $apply: (x) =>
            x.map((c) => ({
              ...c,
              isCorrect: c.id === choice.id,
            })),
        },
      }),
    );
  };
  return (
    <div key={question.id}>
      <h2 className="mb-2 text-xl font-semibold">Question:</h2>
      <Editor value={question.question} onChange={handleQuestionUpdate} />
      <h2 className="my-2 text-xl font-semibold">Answers:</h2>
      {question.choices.map((choice, index) => (
        <div key={choice.id}>
          <h3 className="text-l mb-2 font-semibold">
            Answer {index + 1}:{' '}
            {choice.isCorrect && (
              <span className="text-emerald-500">Correct</span>
            )}
          </h3>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex flex-col items-center justify-center gap-2 pl-3">
              <button
                type="button"
                aria-disabled={isAnswerTogglable(choice)}
                disabled={isAnswerTogglable(choice)}
                className="text-slate-400 hover:rounded-lg hover:border hover:bg-emerald-200 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-emerald-400"
                onClick={() => handleToggleAnswer(choice)}
              >
                <CheckedIcon className="h-8 w-8" fill="currentColor" />
              </button>
              <button
                type="button"
                aria-disabled={isAnswerNonRemovable(choice)}
                disabled={isAnswerNonRemovable(choice)}
                className="text-red-400 hover:rounded-lg hover:border hover:bg-red-200 disabled:cursor-not-allowed disabled:bg-transparent"
                onClick={() => handleRemoveAnswer(index)}
              >
                <DeleteIcon className="h-8 w-8" fill="currentColor" />
              </button>
              <button
                type="button"
                onClick={() => handleAddAnswer(index)}
                className="text-blue-400 hover:rounded-lg hover:border hover:bg-blue-200"
              >
                <AddIcon className="h-8 w-8" fill="currentColor" />
              </button>
            </div>
            <div className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-14 lg:py-5">
              <Editor
                value={choice.answer}
                onChange={(val) => handleAnswerUpdate(index, val)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

RichtextQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

export default RichtextQuestion;
