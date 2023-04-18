import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ToastProvider, useToastContext } from '../../src'

describe('ToastProvider', () => {
  it('renders children and can display toast messages', () => {
    const TestComponent = () => {
      const { toast, toastSuccess, toastError } = useToastContext()
      return (
        <div>
          <button onClick={() => toast('Default toast message')}>Toast</button>
          <button onClick={() => toastSuccess('Success toast message')}>Toast success</button>
          <button onClick={() => toastError('Error toast message')}>Toast error</button>
        </div>
      )
    }

    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    )

    // test that the component renders children correctly
    expect(screen.getByText('Toast')).toBeInTheDocument()
    expect(screen.getByText('Toast success')).toBeInTheDocument()
    expect(screen.getByText('Toast error')).toBeInTheDocument()

    // test that toast doesn't display before calling
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    // test that the default toast message is displayed when the "toast" function is called
    const toastButton = screen.getByText('Toast')
    act(() => {
      userEvent.click(toastButton)
    })
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Default toast message')).toBeInTheDocument()
    const closeButton = screen.getByRole('button', { name: /close/i })
    act(() => {
      userEvent.click(closeButton)
    })
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    // test that the success toast message is displayed when the "toastSuccess" function is called
    const toastSuccessButton = screen.getByText('Toast success')
    act(() => {
      userEvent.click(toastSuccessButton)
    })
    expect(screen.getByText('Success toast message')).toBeInTheDocument()

    // test that the error toast message is displayed when the "toastError" function is called
    const toastErrorButton = screen.getByText('Toast error')
    act(() => {
      userEvent.click(toastErrorButton)
    })
    expect(screen.getByText('Error toast message')).toBeInTheDocument()
  })
})
