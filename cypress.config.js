const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      
    }
  },
  "chromeWebSecurity": false,
  "failOnStatusCode": false
});
