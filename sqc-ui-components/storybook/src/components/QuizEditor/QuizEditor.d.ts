import { ReactNode } from 'react';
import { Question } from 'sqc-core-functions';
export type QuizEditorParams = {
    /** The quiz question object */
    question: Question;
    /** Whether richtext mode is enabled */
    richtextMode?: boolean;
    /** Function to handle any changes on the question, including adding/editing/removing answers */
    onChange: (question: Question) => void;
    /** Warning message component to display */
    warning?: ReactNode;
};
/**
 * Renders a QuizEditor component with question, answers, and warning.
 */
export declare const QuizEditor: ({ question, richtextMode, onChange, warning }: QuizEditorParams) => JSX.Element;
//# sourceMappingURL=QuizEditor.d.ts.map