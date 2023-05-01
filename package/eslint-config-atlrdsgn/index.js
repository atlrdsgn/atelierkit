/** @format */

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['next', 'turbo', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-anonymous-default-export': 0,
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '.',
      },
    },
    react: {
      version: 'detect',
    },
  },
}
