import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Preview } from '../../src'

describe('Preview', () => {
  const question = {
    question: 'What is the capital of France?',
    choices: [
      { answer: 'Paris', isCorrect: true },
      { answer: 'Madrid', isCorrect: false },
      { answer: 'London', isCorrect: false },
      { answer: 'Rome', isCorrect: false },
    ],
  }

  it('renders the question and choices', () => {
    render(<Preview question={question} />)
    expect(screen.getByText('What is the capital of France?')).toBeInTheDocument()
    expect(screen.getByText('Paris')).toBeInTheDocument()
    expect(screen.getByText('Madrid')).toBeInTheDocument()
    expect(screen.getByText('London')).toBeInTheDocument()
    expect(screen.getByText('Rome')).toBeInTheDocument()
  })

  it('renders the correct answer icon', () => {
    render(<Preview question={question} />)
    expect(screen.getByText('Paris').previousSibling).toHaveClass('text-green-400')
  })

  it('renders the incorrect answer icon', () => {
    render(<Preview question={question} />)
    expect(screen.getByText('Madrid').previousSibling).toHaveClass('text-red-400')
    expect(screen.getByText('London').previousSibling).toHaveClass('text-red-400')
    expect(screen.getByText('Rome').previousSibling).toHaveClass('text-red-400')
  })

  it('renders the question code', () => {
    render(<Preview question={question} />)
    expect(screen.getByRole('generated-code').innerHTML).toContain(
      '<span class="hljs-attr">"question"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"What is the capital of France?"</span>'
    )
  })
})
