/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper:{
    "^.+.(css)$": "jest-transform-stub"
  },
  transform: {
    ".+\\.(css)$": "jest-transform-stub"
  }
};
