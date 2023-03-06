import React, { useContext, useEffect, useState } from 'react';

import { ReactComponent as DeleteForeverIcon } from '@/assets/svg/delete_forever.svg';
import { ReactComponent as ResetIcon } from '@/assets/svg/restart.svg';
import { ReactComponent as SaveIcon } from '@/assets/svg/save.svg';
import RawQuestion from '@/components/RawQuestion/RawQuestion';
import RichtextQuestion from '@/components/RichtextQuestion';
import TabContainer from '@/components/TabContainer';
import QuestionsContext from '@/contexts/questionsContext';
import { Actions } from '@/reducers/questionReducer';

function Container() {
  const {
    questions,
    questionsDispatch,
    selectedQuestion,
    setSelectedQuestion,
  } = useContext(QuestionsContext);

  const initialQuestion = questions[selectedQuestion];
  const [question, setQuestion] = useState(initialQuestion);

  const isNonRemovable = questions.length < 2;

  const removeQuestion = () => {
    questionsDispatch({ type: Actions.REMOVE, index: selectedQuestion });
    if (selectedQuestion === questions.length - 1) {
      setSelectedQuestion(selectedQuestion - 1);
    } else {
      setQuestion(questions[selectedQuestion + 1]);
    }
  };

  const resetQuestion = () => {
    setQuestion(initialQuestion);
  };

  const updateQuestion = () => {
    questionsDispatch({
      type: Actions.UPDATE,
      index: selectedQuestion,
      question,
    });
  };

  useEffect(() => {
    resetQuestion();
  }, [questions, selectedQuestion]);

  const action = (
    <div className="flex items-center justify-between px-4 pb-4">
      <button
        type="button"
        aria-disabled={isNonRemovable}
        disabled={isNonRemovable}
        className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-800 disabled:cursor-not-allowed disabled:bg-red-400"
        onClick={removeQuestion}
      >
        <DeleteForeverIcon
          aria-hidden="true"
          className="mr-2 -ml-1 h-4 w-4"
          fill="currentColor"
          focusable="false"
          role="img"
        />
        Remove
      </button>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="inline-flex items-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-700"
          onClick={resetQuestion}
        >
          <ResetIcon
            aria-hidden="true"
            className="mr-2 -ml-1 h-4 w-4"
            fill="currentColor"
            focusable="false"
            role="img"
          />
          Reset
        </button>
        <button
          type="button"
          className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
          onClick={updateQuestion}
        >
          <SaveIcon
            aria-hidden="true"
            className="mr-2 -ml-1 h-4 w-4"
            fill="currentColor"
            focusable="false"
            role="img"
          />
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
