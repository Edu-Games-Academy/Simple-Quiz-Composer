import { StoryObj } from '@storybook/react';
import { QuestionsProvider } from './QuestionsContext';
declare const meta: {
    title: string;
    component: typeof QuestionsProvider;
    tags: string[];
    argTypes: {
        children: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
//# sourceMappingURL=QuestionsContext.stories.d.ts.map