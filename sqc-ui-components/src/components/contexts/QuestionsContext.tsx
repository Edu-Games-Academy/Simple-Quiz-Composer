import { ReactNode, createContext, useContext, useState } from 'react'

import { QuestionDispatchAction, useQuestionReducer } from '../../reducers/questionReducer'
import { Question } from 'sqc-core-functions'

export type QuestionsContextProps = {
  questions: Question[]
  questionsDispatch: React.Dispatch<QuestionDispatchAction>
  selectedQuestion: number
  setSelectedQuestion: React.Dispatch<React.SetStateAction<number>>
}

const QuestionsContext = createContext({} as QuestionsContextProps)

/**
 * Hook to access question context
 */
const useQuestionsContext = () => useContext(QuestionsContext)

/**
 * Provider element to wrap the other elements to access question context
 * @see {@link useQuestionsContext}
 */
function QuestionsProvider({ children }: { children: ReactNode }) {
  const { questions, questionsDispatch } = useQuestionReducer()
  const [selectedQuestion, setSelectedQuestion] = useState(0)

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
  )
}

export { useQuestionsContext, QuestionsProvider }
