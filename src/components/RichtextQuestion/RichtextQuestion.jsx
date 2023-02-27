import update from 'immutability-helper';
import PropTypes from 'prop-types';
import React from 'react';

import Editor from '@/components/Editor';

function RichtextQuestion({ question, onChange }) {
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
  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">Question:</h2>
      <Editor value={question.question} onChange={handleQuestionUpdate} />
      <h2 className="my-2 text-xl font-semibold">Answers:</h2>
      {question.choices.map((choice, index) => (
        <div key={index}>
          <h3 className="text-l mb-2 font-semibold">Answer {index + 1}:</h3>
          <Editor
            value={choice.answer}
            onChange={(val) => handleAnswerUpdate(index, val)}
          />
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
