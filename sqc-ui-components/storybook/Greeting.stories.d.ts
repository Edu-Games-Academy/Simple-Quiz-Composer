import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ title, message }: import("./Greeting").GreetingProps) => JSX.Element;
    tags: string[];
    argTypes: {
        title: {
            control: {
                type: string;
            };
        };
        message: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
//# sourceMappingURL=Greeting.stories.d.ts.map