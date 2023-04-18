import { formatDateStamp } from '../../src'

describe('formatDateStamp', () => {
  it('formats the date correctly', () => {
    const date = new Date('2022-01-01')
    const expected = '20220101-' + date.getTime()
    const actual = formatDateStamp(date)
    expect(actual).toEqual(expected)
  })

  it('pads single-digit day and month with leading zeros', () => {
    const date = new Date('2022-05-05')
    const expected = '20220505-' + date.getTime()
    const actual = formatDateStamp(date)
    expect(actual).toEqual(expected)
  })
})
