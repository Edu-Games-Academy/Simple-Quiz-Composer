import { ReactNode } from 'react';
import { QuestionDispatchAction } from '../../reducers/questionReducer';
import { Question } from 'sqc-core-functions';
export type QuestionsContextProps = {
    questions: Question[];
    questionsDispatch: React.Dispatch<QuestionDispatchAction>;
    selectedQuestion: number;
    setSelectedQuestion: React.Dispatch<React.SetStateAction<number>>;
};
/**
 * Hook to access question context
 */
declare const useQuestionsContext: () => QuestionsContextProps;
/**
 * Provider element to wrap the other elements to access question context
 * @see {@link useQuestionsContext}
 */
declare function QuestionsProvider({ children }: {
    children: ReactNode;
}): JSX.Element;
export { useQuestionsContext, QuestionsProvider };
//# sourceMappingURL=QuestionsContext.d.ts.map