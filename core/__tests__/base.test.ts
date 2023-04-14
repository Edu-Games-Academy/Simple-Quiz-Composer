import * as base from '../src/index'

describe('Question export', () => {
  it('should have createChoice', () => {
    expect(base.createChoice).toBeDefined()
  })
  it('should have createQuestion', () => {
    expect(base.createQuestion).toBeDefined()
  })
  it('should have questionFormats', () => {
    expect(base.questionFormats).toBeDefined()
  })
})
