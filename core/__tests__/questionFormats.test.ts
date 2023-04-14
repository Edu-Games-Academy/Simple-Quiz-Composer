import * as _module from '../src/question-formats/index'

describe('Question export', () => {
  it('should have gift', () => {
    expect(_module.gift).toBeDefined()
  })
  it('should have json', () => {
    expect(_module.json).toBeDefined()
  })
  it('should have qal', () => {
    expect(_module.qal).toBeDefined()
  })
})
