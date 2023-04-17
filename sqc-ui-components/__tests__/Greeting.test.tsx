import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Greeting } from '../src'

describe('Greeting', () => {
  it('should greet World', async () => {
    render(<Greeting title='Welcome' message='Hello World!' />)

    expect(screen.getByRole('title')).toHaveTextContent('Welcome')
    expect(screen.getByRole('message')).toHaveTextContent('Hello World!')
  })
})
