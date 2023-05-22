export type EditorParams = {
    value: string;
    onChange: (val: string) => void;
    /** if true, display as a RichTextEditor, otherwise, display as a textarea */
    richtextMode?: boolean;
};
/**
 * Text editor component that can be switched between displaying as a textarea or a RichTextEditor.
 */
export declare const Editor: ({ value, onChange, richtextMode }: EditorParams) => JSX.Element;
//# sourceMappingURL=Editor.d.ts.map