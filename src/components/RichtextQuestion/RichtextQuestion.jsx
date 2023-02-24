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
  return (
    <div>
      <Editor value={question.question} onChange={handleQuestionUpdate} />
    </div>
  );
}

RichtextQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

export default RichtextQuestion;
