module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-acme`
    extends: ['atlrdsgn'],
    settings: {
        next: {
            rootDir: ['apps/*/'],
        },
    },
}