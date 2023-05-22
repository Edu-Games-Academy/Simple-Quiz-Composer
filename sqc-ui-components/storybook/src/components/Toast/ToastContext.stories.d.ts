import type { StoryObj } from '@storybook/react';
import { ToastProvider } from './ToastContext';
declare const meta: {
    title: string;
    component: typeof ToastProvider;
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
//# sourceMappingURL=ToastContext.stories.d.ts.map