import { ReactNode, createContext, useContext, useState } from 'react'

import { Toast, ToastParams } from './Toast'

export type ToastContextProps = {
  toast: (message: string) => void
  toastSuccess: (message: string) => void
  toastError: (message: string) => void
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps)

/**
 * Hook to access toast context
 */
const useToastContext = () => useContext(ToastContext)

/**
 * Provider element to wrap other elements to access toast context
 * @see {@link useToastContext}
 */
function ToastProvider({ children }: { children: ReactNode }) {
  const [showToast, setShowToast] = useState(false)
  const [type, setType] = useState<ToastParams['type']>('default')
  const [text, setText] = useState('')

  const _toast = (toastType: typeof type, message: string) => {
    setType(toastType)
    setText(message)
    setShowToast(true)
  }

  const toast = (message: string) => {
    _toast('default', message)
  }

  const toastSuccess = (message: string) => {
    _toast('success', message)
  }

  const toastError = (message: string) => {
    _toast('error', message)
  }

  return (
    <ToastContext.Provider
      value={{
        toast,
        toastSuccess,
        toastError,
      }}
    >
      {children}
      {showToast && <Toast type={type} text={text} onClose={() => setShowToast(false)} />}
    </ToastContext.Provider>
  )
}

export { useToastContext, ToastProvider }
