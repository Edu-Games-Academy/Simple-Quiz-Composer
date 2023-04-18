import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Toast } from '../../src'

describe('Toast', () => {
  it('renders with text and close button', () => {
    const onCloseMock = jest.fn()
    render(<Toast text='Hello world!' onClose={onCloseMock} />)

    // Check that the text is rendered
    expect(screen.getByText('Hello world!')).toBeInTheDocument()

    // Check that the close button is rendered
    const closeButton = screen.getByLabelText('Close')
    expect(closeButton).toBeInTheDocument()
    expect(closeButton).toHaveAttribute('type', 'button')

    // Click the close button and check that the onClose function is called
    closeButton.click()
    expect(onCloseMock).toHaveBeenCalled()
  })
})
