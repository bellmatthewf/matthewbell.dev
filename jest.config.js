module.exports = {
    preset: "@vue/cli-plugin-unit-jest",
    transformIgnorePatterns: ["/node_modules/(?!vuetify)"],
    // Run this file to setup before tests
    setupFiles: ["<rootDir>/tests/unit/setup.js"],
}
