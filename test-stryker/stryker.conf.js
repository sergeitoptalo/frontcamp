module.exports = function(config) {
  config.set({
    mutate: [
      'src/*.js'
    ],
    testRunner: "mocha",
    mutator: "javascript",
    transpilers: [],
    reporter: ["html"],
    testFramework: "mocha",
    coverageAnalysis: "off",
    plugins: ['stryker-mocha-runner', 'stryker-html-reporter', 'stryker-javascript-mutator']
  });
};
