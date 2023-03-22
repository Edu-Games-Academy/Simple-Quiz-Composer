import React from 'react';

import { useQuestionsContext } from '@/contexts/QuestionsContext';
import { Actions } from '@/reducers/questionReducer';

import SideBarButton from './SideBarButton';

function SideBar() {
  const {
    questions,
    questionsDispatch,
    selectedQuestion,
    setSelectedQuestion,
  } = useQuestionsContext();
  const addQuestion = () => {
    questionsDispatch({ type: Actions.ADD });
    setSelectedQuestion(questions.length);
  };
  return (
    <aside
      className="fixed top-0 left-0 z-40 h-screen w-64 border-r border-gray-700 bg-gray-800 pt-32 transition-transform lg:pt-20"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-gray-800 px-3 pb-4">
        <ul className="grid grid-cols-3 gap-4">
          {questions.map((_, index) => (
            <SideBarButton
              key={index}
              label={String(index + 1)}
              isSelected={selectedQuestion === index}
              onClick={() => setSelectedQuestion(index)}
            />
          ))}
          <SideBarButton label="+" onClick={() => addQuestion()} />
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
