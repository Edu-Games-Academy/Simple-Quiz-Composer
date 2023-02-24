import React, { useContext, useState } from 'react';

import RawQuestion from '@/components/RawQuestion/RawQuestion';
import RichtextQuestion from '@/components/RichtextQuestion';
import TabContainer from '@/components/TabContainer';
import QuestionsContext from '@/contexts/questionsContext';

function Container() {
  const { questions, selectedQuestion } = useContext(QuestionsContext);

  const initialQuestion = questions[selectedQuestion];
  const [question, setQuestion] = useState(initialQuestion);

  return (
    <div className="ml-64 mt-28 p-4 lg:mt-16">
      <TabContainer tabs={['Rich-text', 'Raw']}>
        <RichtextQuestion question={question} onChange={setQuestion} />
        <RawQuestion question={question} />
      </TabContainer>
    </div>
  );
}

export default Container;
