import { ReactNode, createContext, useContext, useState } from 'react'

import { QuestionDispatchAction, useQuestionReducer } from '../../reducers/questionReducer'
import { Question } from 'sqc-core-functions'

type QuestionsProps = {
  questions: Question[]
  questionsDispatch: React.Dispatch<QuestionDispatchAction>
  selectedQuestion: number
  setSelectedQuestion: React.Dispatch<React.SetStateAction<number>>
}

const QuestionsContext = createContext({} as QuestionsProps)

const useQuestionsContext = () => useContext(QuestionsContext)

type Props = {
  children: ReactNode
}
function QuestionsProvider({ children }: Props) {
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
