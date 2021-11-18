/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper:{
    "\\.(css|jpg)$": "identity-obj-proxy",
  },
  "transform": {
    '^.+\\.ts?$': 'ts-jest',
    "^.+\\.jsx?$": "babel-jest"
  }
};
