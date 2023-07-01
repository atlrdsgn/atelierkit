module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-acme`
    extends: ['atlrdsgn'],
    include: ['apps/*/src/**/*', 'packages/*/src/**/*'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['./package/atlrdsgn-tsconfig/tsconfig.eslint.json'],
    },
    settings: {
        next: {
            rootDir: ['apps/*/'],
        },
    },
}
