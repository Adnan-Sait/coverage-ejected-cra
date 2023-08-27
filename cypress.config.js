const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);

      return config;
    },
    video: false,
    screenshotOnRunFailure: false,
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    video: false,
    screenshotOnRunFailure: false,
  },
});
