import hljs from 'highlight.js'
import katex from 'katex'
import ReactQuill from 'react-quill'

window.katex = katex

const modules = {
  syntax: {
    highlight:
      /* istanbul ignore next */
      (text: string) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    [{ font: [] }, { size: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'super' }, { script: 'sub' }],
    [{ header: '1' }, { header: '2' }, 'blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }, { align: [] }],
    ['link', 'image', 'video', 'formula'],
    ['clean'],
  ],
}

export const RichtextEditor = (props: ReactQuill.ReactQuillProps) => {
  return <ReactQuill theme='snow' modules={modules} {...props} />
}
