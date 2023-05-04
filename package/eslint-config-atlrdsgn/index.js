module.exports = {
    extends: [
        'next',
        'turbo',
        'prettier',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        project: ['../atlrdsgn-tsconfig/tsconfig.eslint.json'],
    },
    rules: {},

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