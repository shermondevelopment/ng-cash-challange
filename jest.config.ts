export default {
  clearMocks: true,
  collectCoverage: false,
  roots: ['<rootDir>/test'],
  collectCoverageFrom: ['<rootDir>./test/**/*.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageDirectory: 'coverage',
  testMatch: ['**/*.spec.ts'],
  coverageProvider: 'v8'
}
