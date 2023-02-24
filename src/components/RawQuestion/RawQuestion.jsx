import PropTypes from 'prop-types';
import React from 'react';

function RawQuestion({ question }) {
  return (
    <div>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Question
      </h5>
      <div className="w-full bg-slate-400">
        <code>{question.question}</code>
      </div>
    </div>
  );
}

RawQuestion.propTypes = {
  question: PropTypes.object.isRequired,
};

export default RawQuestion;
