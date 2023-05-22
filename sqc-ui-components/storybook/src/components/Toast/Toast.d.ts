export type ToastParams = {
    /** Toast style */
    type?: 'default' | 'success' | 'error';
    /** Toast message */
    text: string;
    /** Action when user click on close button. Needs implementation to actually hide the toast */
    onClose: () => void;
};
/**
 * Toast component is used to display toasts in the application.
 * It receives props like  `type` ,  `text`  and  `onClose`  for styling, text and close icon respectively.
 * It can be used to display different types of toast in the application like success, error, default.
 */
export declare const Toast: ({ type, text, onClose }: ToastParams) => JSX.Element;
//# sourceMappingURL=Toast.d.ts.map