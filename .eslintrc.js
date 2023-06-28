module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-acme`
    extends: ['atlrdsgn'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: ['./package/*/tsconfig.json'],
    },
    settings: {
        next: {
            rootDir: ['apps/*/'],
        },
    },
}
