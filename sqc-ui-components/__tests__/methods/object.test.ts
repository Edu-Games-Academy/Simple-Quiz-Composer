import { deepEqual } from '../../src'

describe('deepEqual', () => {
  it('returns true for two identical objects', () => {
    const obj1 = { foo: 'bar', baz: 123 }
    const obj2 = { foo: 'bar', baz: 123 }
    const result = deepEqual(obj1, obj2)
    expect(result).toEqual(true)
  })

  it('returns false for two different objects', () => {
    const obj1 = { foo: 'bar', baz: 123 }
    const obj2 = { foo: 'bar', qux: 'hello' }
    const result = deepEqual(obj1, obj2)
    expect(result).toEqual(false)
  })

  it('returns true for two complex nested objects with the same values', () => {
    const obj1 = { foo: { bar: { baz: [1, 2, 3] } } }
    const obj2 = { foo: { bar: { baz: [1, 2, 3] } } }
    const result = deepEqual(obj1, obj2)
    expect(result).toEqual(true)
  })

  it('returns false for two complex nested objects with different values', () => {
    const obj1 = { foo: { bar: { baz: [1, 2, 3] } } }
    const obj2 = { foo: { bar: { baz: [4, 5, 6] } } }
    const result = deepEqual(obj1, obj2)
    expect(result).toEqual(false)
  })

  it('returns false for objects of different types', () => {
    const obj1 = { foo: 'bar' }
    const obj2 = 'bar'
    const result = deepEqual(obj1, obj2)
    expect(result).toEqual(false)
  })

  it('returns false for objects of different key length', () => {
    const obj1 = { foo: 'bar' }
    const obj2 = { foo: 'bar', more: 1 }
    const result = deepEqual(obj1, obj2)
    expect(result).toEqual(false)
  })

  it('returns true for null objects', () => {
    const obj1 = null
    const obj2 = null
    const result = deepEqual(obj1, obj2)
    expect(result).toEqual(true)
  })
})
