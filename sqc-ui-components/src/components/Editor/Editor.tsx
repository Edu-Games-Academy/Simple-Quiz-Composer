import { RichtextEditor } from './RichtextEditor'

export type EditorParams = {
  value: string
  onChange: (val: string) => void
  /** if true, display as a RichTextEditor, otherwise, display as a textarea */
  richtextMode?: boolean
}

/**
 * Text editor component that can be switched between displaying as a textarea or a RichTextEditor.
 */
export const Editor = ({ value, onChange, richtextMode = true }: EditorParams) => {
  return richtextMode ? (
    <RichtextEditor
      value={value}
      onChange={(val, delta, source) =>
        source === 'user' &&
        /* istanbul ignore next */
        onChange(val)
      }
    />
  ) : (
    <textarea
      rows={3}
      className='sqc-my-2.5 sqc-block sqc-w-full sqc-rounded-lg sqc-border sqc-border-gray-300 sqc-bg-gray-50 sqc-p-2.5 sqc-text-sm sqc-text-gray-900 focus:sqc-border-blue-500 focus:sqc-ring-blue-500'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
