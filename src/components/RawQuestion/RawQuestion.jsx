import hljs from 'highlight.js';
import PropTypes from 'prop-types';
import React from 'react';

function RawQuestion({ question }) {
  return (
    <div>
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

RawQuestion.propTypes = {
  question: PropTypes.object.isRequired,
};

export default RawQuestion;
