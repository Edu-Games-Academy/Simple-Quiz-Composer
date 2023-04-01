import PropTypes from 'prop-types';
import React, { createContext, useContext, useReducer, useState } from 'react';

import { initialQuestions, questionsReducer } from '@/reducers/questionReducer';

const QuestionsContext = createContext();

const useQuestionsContext = () => useContext(QuestionsContext);

function QuestionsProvider({ children }) {
  const [questions, questionsDispatch] = useReducer(
    questionsReducer,
    initialQuestions,
  );
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        questionsDispatch,
        selectedQuestion,
        setSelectedQuestion,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

QuestionsProvider.propTypes = {
  children: PropTypes.node,
};

export { useQuestionsContext, QuestionsProvider };
