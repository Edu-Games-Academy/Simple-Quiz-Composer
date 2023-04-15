import * as base from '../src/index'

describe('Base export', () => {
  it('should have getGreeting', () => {
    expect(base.getGreeting).toBeDefined()
  })
})
