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
      style = 'sqc-bg-green-800 sqc-text-green-200'
      break
    case 'error':
      Icon = CloseIcon
      style = 'sqc-bg-red-800 sqc-text-red-200'
      break
    case 'default':
    default:
      Icon = MenuIcon
      style = 'sqc-bg-slate-800 sqc-text-slate-200'
  }
  return (
    <div
      className='sqc-fixed sqc-right-5 sqc-bottom-5 sqc-flex sqc-w-full sqc-max-w-xs sqc-items-center sqc-rounded-lg sqc-bg-gray-800 sqc-p-4 sqc-text-gray-400 sqc-shadow'
      role='alert'
    >
      <div
        className={`sqc-inline-flex sqc-h-8 sqc-w-8 sqc-flex-shrink-0 sqc-items-center sqc-justify-center sqc-rounded-lg ${style}`}
      >
        <Icon aria-hidden='true' className='sqc-h-5 sqc-w-5' fill='currentColor' />
        <span className='sqc-sr-only'>Status icon</span>
      </div>
      <div className='sqc-ml-3 sqc-text-sm sqc-font-normal'>{text}</div>
      <button
        type='button'
        className='sqc--mx-1.5 sqc--my-1.5 sqc-ml-auto sqc-inline-flex sqc-h-8 sqc-w-8 sqc-rounded-lg sqc-bg-gray-800 sqc-p-1.5 sqc-text-gray-500 hover:sqc-bg-gray-700 hover:sqc-text-white focus:sqc-ring-2 focus:sqc-ring-gray-300'
        aria-label='Close'
        onClick={onClose}
      >
        <span className='sqc-sr-only'>Close</span>
        <CloseIcon aria-hidden='true' className='sqc-h-5 sqc-w-5' fill='currentColor' />
      </button>
    </div>
  )
}
