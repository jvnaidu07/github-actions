const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  // Viewport settings overridden for component tests
  // Command timeout overridden for E2E tests
  e2e: {
    pageLoadTimeout: 30000,
    defaultCommandTimeout: 10000,
    env: {
      "viewportHeight": 1080,
      "viewportWidth": 1920,
      "pageLoadTimeout": 2000000,
      baseUrl: "https://colorhunt.co/palette/900c3fc70039f94c10f8de22",
      background_color_website: "https://cssgradient.io/shades-of-blue/",
      dragAnddropWebsite: "https://demo.automationtesting.in/Static.html",
      loginPage: "https://demo.guru99.com/test/newtours/login.php",
      registerPage: "https://demo.guru99.com/test/newtours/register.php",
      githubb: "https://github.com/",
      dragAndDrop: "https://demo.guru99.com/test/drag_drop.html"
    }
  },
})
//Cypress.config('pageLoadTimeout', 100000)

