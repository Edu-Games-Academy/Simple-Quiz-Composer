import React, { useEffect, useState } from 'react';

import { ReactComponent as DeleteForeverIcon } from '@/assets/svg/delete_forever.svg';
import { ReactComponent as ResetIcon } from '@/assets/svg/restart.svg';
import { ReactComponent as SaveIcon } from '@/assets/svg/save.svg';
import Preview from '@/components/Preview/Preview';
import RichtextQuestion from '@/components/RichtextQuestion';
import TabContainer from '@/components/TabContainer';
import { useQuestionsContext } from '@/contexts/QuestionsContext';
import { deepEqual } from '@/methods/object';
import { Actions } from '@/reducers/questionReducer';

function Container() {
  const {
    questions,
    questionsDispatch,
    selectedQuestion,
    setSelectedQuestion,
  } = useQuestionsContext();

  const [richtextMode, setRichtextMode] = useState(true);

  const initialQuestion = questions[selectedQuestion];
  const [question, setQuestion] = useState(initialQuestion);

  const isQuestionUnchanged = deepEqual(initialQuestion, question);

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

  const warning = !isQuestionUnchanged && (
    <div className="px-2.5 text-sm text-red-500">
      Question has changed. Remember to save before leaving.
    </div>
  );

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
          aria-disabled={isQuestionUnchanged}
          disabled={isQuestionUnchanged}
          className="inline-flex items-center rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-900 disabled:cursor-not-allowed disabled:bg-yellow-200"
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
          aria-disabled={isQuestionUnchanged}
          disabled={isQuestionUnchanged}
          className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
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
      <TabContainer tabs={['Editor', 'Preview']} action={action}>
        <div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value=""
              className="peer sr-only"
              checked={richtextMode}
              onChange={() => setRichtextMode(!richtextMode)}
            />
            <div className="peer h-6 w-11 rounded-full border-gray-600 bg-gray-700 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white" />
            <span className="ml-3 text-sm font-medium text-gray-900">
              Use Rich-text Editor
            </span>
          </label>
          <RichtextQuestion
            question={question}
            onChange={setQuestion}
            warning={warning}
            richtextMode={richtextMode}
          />
        </div>
        <Preview question={question} />
      </TabContainer>
    </div>
  );
}

export default Container;
