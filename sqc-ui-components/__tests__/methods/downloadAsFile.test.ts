import { downloadAsFile } from '../../src'

describe('downloadAsFile', () => {
  const mockClick = jest.fn()
  beforeEach(() => {
    // Mock the createObjectURL and click methods
    URL.createObjectURL = jest.fn().mockReturnValue('mock-url')
    URL.revokeObjectURL = jest.fn()

    global.document.createElement = jest.fn().mockReturnValue({
      href: '',
      download: '',
      click: mockClick,
    })
  })

  it('creates a downloadable file with the specified data, name and type', () => {
    const data = 'Hello, world!'
    const fileName = 'test.txt'
    const fileType = 'text/plain'

    downloadAsFile({ data, fileName, fileType })

    expect(URL.createObjectURL).toHaveBeenCalledWith(expect.any(Blob))
    expect(global.document.createElement).toHaveBeenCalledWith('a')
    expect(mockClick).toHaveBeenCalled()
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('mock-url')
  })

  it('uses default values if not provided', () => {
    const data = 'Hello, world!'

    downloadAsFile({ data })

    expect(URL.createObjectURL).toHaveBeenCalledWith(expect.any(Blob))
    expect(global.document.createElement).toHaveBeenCalledWith('a')
    expect(mockClick).toHaveBeenCalled()
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('mock-url')
  })
})
