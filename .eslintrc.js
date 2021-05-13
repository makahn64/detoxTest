module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: '@react-native-community',
  plugins: ['detox'],
  overrides: [
    {
      files: ['*.e2e.js', '*.e2e.ts'],
      env: {
        'detox/detox': true,
        jest: true,
        'jest/globals': true,
      },
    },
  ],
};
