import { ReactNode, createContext, useContext, useState } from 'react'

import { Toast, ToastParams } from './Toast'

type ToastProps = {
  toast: (message: string) => void
  toastSuccess: (message: string) => void
  toastError: (message: string) => void
}

const ToastContext = createContext<ToastProps>({} as ToastProps)

const useToastContext = () => useContext(ToastContext)

type Props = {
  children: ReactNode
}
function ToastProvider({ children }: Props) {
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
