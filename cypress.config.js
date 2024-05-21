//const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  // Viewport settings overridden for component tests
  // Command timeout overridden for E2E tests
  e2e: {
    defaultCommandTimeout: 10000,
  },
})
//Cypress.config('pageLoadTimeout', 100000)

