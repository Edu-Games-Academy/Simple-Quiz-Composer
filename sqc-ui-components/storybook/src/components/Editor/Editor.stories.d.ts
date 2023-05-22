import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ value, onChange, richtextMode }: import("./Editor").EditorParams) => JSX.Element;
    tags: string[];
    argTypes: {
        value: {
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
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const RichtextOff: Story;
//# sourceMappingURL=Editor.stories.d.ts.map