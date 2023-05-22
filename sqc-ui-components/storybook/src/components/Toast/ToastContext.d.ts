import { ReactNode } from 'react';
export type ToastContextProps = {
    toast: (message: string) => void;
    toastSuccess: (message: string) => void;
    toastError: (message: string) => void;
};
/**
 * Hook to access toast context
 */
declare const useToastContext: () => ToastContextProps;
/**
 * Provider element to wrap other elements to access toast context
 * @see {@link useToastContext}
 */
declare function ToastProvider({ children }: {
    children: ReactNode;
}): JSX.Element;
export { useToastContext, ToastProvider };
//# sourceMappingURL=ToastContext.d.ts.map