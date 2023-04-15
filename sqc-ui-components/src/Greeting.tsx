import React from 'react'

export type GreetingProps = {
  message: string
}

export const Greeting = ({ message }: GreetingProps) => {
  return <div role='message'>{message}</div>
}
