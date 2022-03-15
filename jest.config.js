// jest.config.js
module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom'
}
