import { Question } from 'sqc-core-functions';
export declare enum QuestionsActions {
    /** Add an empty question to the end of the list */
    ADD = "add",
    /** Remove the question at specified index */
    REMOVE = "remove",
    /** Update the question at specified index */
    UPDATE = "update",
    /** Replace the whole question list */
    REPLACE = "replace"
}
/**
 * Initial question list when first loading the page.
 * Containing an empty question
 */
export declare const initialQuestions: {
    question: string;
    choices: {
        answer: string;
        isCorrect: boolean;
        id?: string | undefined;
    }[];
    id?: string | undefined;
}[];
/**
 * Dispatch event for question store.
 * @see {@link QuestionsActions}
 */
export type QuestionDispatchAction = {
    type: QuestionsActions.ADD;
} | {
    type: QuestionsActions.REMOVE;
    index: number;
} | {
    type: QuestionsActions.UPDATE;
    index: number;
    question: Question;
} | {
    type: QuestionsActions.REPLACE;
    questions: Question[];
};
/**
 * Hook returns current question store and a dispatcher
 */
export declare const useQuestionReducer: () => {
    questions: {
        question: string;
        choices: {
            answer: string;
            isCorrect: boolean;
            id?: string | undefined;
        }[];
        id?: string | undefined;
    }[];
    questionsDispatch: import("react").Dispatch<QuestionDispatchAction>;
};
//# sourceMappingURL=questionReducer.d.ts.map