import React, { useReducer } from 'react';

import Container from '@/components/Container';
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import QuestionsContext from '@/contexts/questionsContext';
import { initialQuestions, questionsReducer } from '@/reducers/questionReducer';

function App() {
  const [questions, questionsDispatch] = useReducer(
    questionsReducer,
    initialQuestions,
  );

  return (
    <div className="App">
      <QuestionsContext.Provider value={{ questions, questionsDispatch }}>
        <NavBar />
        <SideBar />
        <Container />
      </QuestionsContext.Provider>
    </div>
  );
}

export default App;
