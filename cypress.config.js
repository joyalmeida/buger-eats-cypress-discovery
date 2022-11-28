const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "projectId": "iy9zmm",
    "viewportHeight": 900,
    "viewportWidth": 1440,
    "baseUrl": "https://buger-eats-qa.vercel.app",
  },
});

