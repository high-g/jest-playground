import { sum } from './export'

test('adds 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('boolean', () => {
  const n = null
  expect(n).toBe(null)
  expect(n).toBeNull()
  expect(undefined).toBeUndefined()
  expect(n).toBeDefined()
  expect(true).toBeTruthy()
  expect(false).toBeFalsy()
})

test('number', () => {
  const num = 2
  expect(num).toBeGreaterThan(1)
})
