import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg'
import { ReactComponent as DoneIcon } from '../../assets/svg/done.svg'
import { ReactComponent as MenuIcon } from '../../assets/svg/menu.svg'

export type ToastParams = {
  /** Toast style */
  type?: 'default' | 'success' | 'error'
  /** Toast message */
  text: string
  /** Action when user click on close button. Needs implementation to actually hide the toast */
  onClose: () => void
}

/**
 * Toast component is used to display toasts in the application.
 * It receives props like  `type` ,  `text`  and  `onClose`  for styling, text and close icon respectively.
 * It can be used to display different types of toast in the application like success, error, default.
 */
export const Toast = ({ type = 'default', text, onClose }: ToastParams) => {
  let Icon
  let style

  switch (type) {
    case 'success':
      Icon = DoneIcon
      style = 'bg-green-800 text-green-200'
      break
    case 'error':
      Icon = CloseIcon
      style = 'bg-red-800 text-red-200'
      break
    case 'default':
    default:
      Icon = MenuIcon
      style = 'bg-slate-800 text-slate-200'
  }
  return (
    <div
      className='fixed right-5 bottom-5 flex w-full max-w-xs items-center rounded-lg bg-gray-800 p-4 text-gray-400 shadow'
      role='alert'
    >
      <div className={`inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${style}`}>
        <Icon aria-hidden='true' className='h-5 w-5' fill='currentColor' />
        <span className='sr-only'>Status icon</span>
      </div>
      <div className='ml-3 text-sm font-normal'>{text}</div>
      <button
        type='button'
        className='-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-gray-800 p-1.5 text-gray-500 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-gray-300'
        aria-label='Close'
        onClick={onClose}
      >
        <span className='sr-only'>Close</span>
        <CloseIcon aria-hidden='true' className='h-5 w-5' fill='currentColor' />
      </button>
    </div>
  )
}
