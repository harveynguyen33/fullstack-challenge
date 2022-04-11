module.exports = {
  displayName: 'front-api-feature-movie',
  preset: '../../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../../../coverage/libs/front-api/feature/movie',
};
