import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ question, richtextMode, onChange, warning }: import("./QuizEditor").QuizEditorParams) => JSX.Element;
    tags: string[];
    argTypes: {
        question: {
            control: {
                type: string;
            };
        };
        richtextMode: {
            control: {
                type: string;
            };
        };
        onChange: {
            control: {
                type: string;
            };
        };
        warning: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const RawMode: Story;
export declare const HasQuestion: Story;
export declare const HasQuestionWithWarning: Story;
//# sourceMappingURL=QuizEditor.stories.d.ts.map