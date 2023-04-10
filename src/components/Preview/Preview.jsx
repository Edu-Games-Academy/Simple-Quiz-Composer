import hljs from 'highlight.js';
import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as CheckedIcon } from '@/assets/svg/checked.svg';
import { ReactComponent as CloseIcon } from '@/assets/svg/close.svg';

const Answer = ({ answer, isCorrect, className }) => (
  <li className={`${className} flex w-full items-center gap-2 p-2`}>
    {isCorrect ? (
      <CheckedIcon className="h-5 w-5 text-green-400" fill="currentColor" />
    ) : (
      <CloseIcon className="h-5 w-5 text-red-400" fill="currentColor" />
    )}
    <span
      dangerouslySetInnerHTML={{
        __html: answer,
      }}
    />
  </li>
);

Answer.propTypes = {
  answer: PropTypes.string,
  isCorrect: PropTypes.bool,
  className: PropTypes.string,
};

function Preview({ question }) {
  return (
    <div>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900">
        Rendered:
      </h5>

      <div className="my-4 w-full rounded-lg border border-gray-200">
        <div
          className="block w-full rounded-t-lg border-b border-gray-200 bg-slate-200 px-4 py-2 "
          dangerouslySetInnerHTML={{ __html: question.question }}
        />
        <ul>
          {question.choices
            .slice(0, question.choices.length - 1)
            .map((choice, index) => (
              <Answer
                key={index}
                answer={choice.answer}
                isCorrect={choice.isCorrect}
                className="border-b border-gray-200"
              />
            ))}
          <Answer
            answer={question.choices[question.choices.length - 1]?.answer}
            isCorrect={question.choices[question.choices.length - 1]?.isCorrect}
            className="rounded-b-lg"
          />
        </ul>
      </div>

      <h5 className="text-xl font-semibold tracking-tight text-gray-900">
        Code:
      </h5>
      <div className="w-full overflow-scroll rounded-sm bg-slate-700 p-2">
        <pre>
          <code
            dangerouslySetInnerHTML={{
              __html: hljs.highlight(JSON.stringify(question, null, 2), {
                language: 'json',
              }).value,
            }}
          />
        </pre>
      </div>
    </div>
  );
}

Preview.propTypes = {
  question: PropTypes.object.isRequired,
};

export default Preview;
