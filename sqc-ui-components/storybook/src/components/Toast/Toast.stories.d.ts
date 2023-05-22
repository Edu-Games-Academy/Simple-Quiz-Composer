import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ type, text, onClose }: import("./Toast").ToastParams) => JSX.Element;
    tags: string[];
    argTypes: {
        type: {
            control: {
                type: string;
            };
        };
        text: {
            control: {
                type: string;
            };
        };
        onClose: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const DefaultWithAction: Story;
export declare const Success: Story;
export declare const Error: Story;
//# sourceMappingURL=Toast.stories.d.ts.map