import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { Editor } from '../../src'

describe('Editor', () => {
  test('Editor renders RichtextEditor when richtextMode is empty', () => {
    const value = 'Test Value'
    const onChange = jest.fn()
    const { container } = render(<Editor value={value} onChange={onChange} />)
    expect(container.querySelector('.quill')).toBeInTheDocument()
    expect(container.querySelector('textarea')).not.toBeInTheDocument()
  })
  test('Editor renders textarea when richtextMode is false', () => {
    const value = 'Test Value'
    const onChange = jest.fn()
    const richtextMode = false
    const { container } = render(<Editor value={value} onChange={onChange} richtextMode={richtextMode} />)
    expect(container.querySelector('.quill')).not.toBeInTheDocument()
    expect(container.querySelector('textarea')).toBeInTheDocument()
  })
  test('Editor renders correct value when richtextMode is true', () => {
    const value = 'Test Value'
    const onChange = jest.fn()
    const richtextMode = true
    const { container } = render(<Editor value={value} onChange={onChange} richtextMode={richtextMode} />)
    expect(container.innerHTML).toContain('Test Value')
  })
  test('Editor renders correct value when richtextMode is false', () => {
    const value = 'Test Value'
    const onChange = jest.fn()
    const richtextMode = false
    const { container } = render(<Editor value={value} onChange={onChange} richtextMode={richtextMode} />)
    expect(container.querySelector('textarea')?.value).toContain('Test Value')
  })
  test('Editor calls onChange with correct value when richtextMode is false', () => {
    const value = 'Test Value'
    const onChange = jest.fn()
    const richtextMode = false
    const { container } = render(<Editor value={value} onChange={onChange} richtextMode={richtextMode} />)
    fireEvent.change(container.querySelector('textarea')!, { target: { value: 'New Value' } })
    expect(onChange).toHaveBeenCalledWith('New Value')
  })
})
