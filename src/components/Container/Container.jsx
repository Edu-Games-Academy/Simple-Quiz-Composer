import React, { useContext, useState } from 'react';

import RawQuestion from '@/components/RawQuestion/RawQuestion';
import RichtextQuestion from '@/components/RichtextQuestion';
import TabContainer from '@/components/TabContainer';
import QuestionsContext from '@/contexts/questionsContext';

function Container() {
  const { questions, selectedQuestion } = useContext(QuestionsContext);

  const initialQuestion = questions[selectedQuestion];
  const [question, setQuestion] = useState(initialQuestion);

  const resetQuestion = () => {
    setQuestion(initialQuestion);
  };

  const action = (
    <div className="flex items-center justify-between px-4 pb-4">
      <button
        type="button"
        className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-900"
      >
        Remove
      </button>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-900"
          onClick={resetQuestion}
        >
          Reset
        </button>
        <button
          type="button"
          className="inline-flex items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
        >
          <svg
            aria-hidden="true"
            className="mr-2 -ml-1 h-4 w-4"
            fill="currentColor"
            focusable="false"
            role="img"
            viewBox="0 0 407.096 407.096"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M402.115,84.008L323.088,4.981C319.899,1.792,315.574,0,311.063,0H17.005C7.613,0,0,7.614,0,17.005v373.086    c0,9.392,7.613,17.005,17.005,17.005h373.086c9.392,0,17.005-7.613,17.005-17.005V96.032    C407.096,91.523,405.305,87.197,402.115,84.008z M300.664,163.567H67.129V38.862h233.535V163.567z" />
            <path d="M214.051,148.16h43.08c3.131,0,5.668-2.538,5.668-5.669V59.584c0-3.13-2.537-5.668-5.668-5.668h-43.08    c-3.131,0-5.668,2.538-5.668,5.668v82.907C208.383,145.622,210.92,148.16,214.051,148.16z" />
          </svg>
          Save
        </button>
      </div>
    </div>
  );

  return (
    <div className="ml-64 mt-28 p-4 lg:mt-16">
      <TabContainer tabs={['Rich-text', 'Raw']} action={action}>
        <RichtextQuestion question={question} onChange={setQuestion} />
        <RawQuestion question={question} />
      </TabContainer>
    </div>
  );
}

export default Container;
