import { testQuestions } from '__tests__/_common/question'
import { getRandomNumber } from '__tests__/_common/utils'
import { createQuestion } from 'sqc-core-functions'
import { QuestionsActions, initialQuestions } from 'src/reducers/questionReducer'
import { QuestionsProvider, useQuestionsContext } from './QuestionsContext'

export default {
  title: 'Components/QuestionsProvider',
  component: QuestionsProvider,
}

const ChildComponent = () => {
  const { questions, selectedQuestion, setSelectedQuestion, questionsDispatch } = useQuestionsContext()
  const styles: React.CSSProperties = {
    border: 'solid 1px black',
    margin: 4,
  }

  return (
    <>
      <button style={styles} onClick={() => setSelectedQuestion(getRandomNumber(questions.length))}>
        Change question
      </button>
      <button
        style={styles}
        onClick={() => questionsDispatch({ type: QuestionsActions.REPLACE, questions: initialQuestions })}
      >
        Reset questions
      </button>
      <button
        style={styles}
        onClick={() => questionsDispatch({ type: QuestionsActions.REPLACE, questions: testQuestions })}
      >
        Load questions
      </button>
      <button style={styles} onClick={() => questionsDispatch({ type: QuestionsActions.ADD })}>
        Add question
      </button>
      <button
        style={styles}
        onClick={() =>
          questionsDispatch({
            type: QuestionsActions.UPDATE,
            index: 0,
            question: createQuestion({ question: 'New question' }),
          })
        }
      >
        Update first
      </button>
      <button style={styles} onClick={() => questionsDispatch({ type: QuestionsActions.REMOVE, index: 0 })}>
        Remove first
      </button>
      <div>Selected question: {selectedQuestion}</div>
      <div>
        <pre>{JSON.stringify(questions[selectedQuestion])}</pre>
      </div>
      <div>
        <pre>{JSON.stringify(questions, null, 2)}</pre>
      </div>
    </>
  )
}

export const Default = () => (
  <QuestionsProvider>
    <ChildComponent />
  </QuestionsProvider>
)
