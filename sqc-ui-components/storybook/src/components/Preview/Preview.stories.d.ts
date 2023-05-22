import type { StoryObj } from '@storybook/react';
import { Preview } from './Preview';
declare const meta: {
    title: string;
    component: typeof Preview;
    tags: string[];
    argTypes: {
        question: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const SimpleQuestion: Story;
export declare const CodeHighlighted: Story;
export declare const Image: Story;
export declare const MathFormula: Story;
//# sourceMappingURL=Preview.stories.d.ts.map