/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '/__tests__/.+test.tsx?$',
  watchPathIgnorePatterns: ['.*\\.stories\\.ts$'],
  collectCoverageFrom: ['./src/**/**.{ts,tsx}', '!./src/**/**.stories.{ts,tsx}'],
  coverageReporters: ['lcov', 'json-summary', ['text', { file: 'coverage.txt', path: './' }]],
  moduleNameMapper: {
    '\\.(svg)$': '<rootDir>/__mocks__/svg.js',
  },
}
