module.exports = {
  root: true,
  extends: [
    'next',
    'turbo',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint', 'react-refresh'],
  rules: {},

  parser: '@typescript-eslint/parser',
  /**
   *
   * see: 'https://typescript-eslint.io/getting-started/'
   * for more information on set-up.
   */
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
};
