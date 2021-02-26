module.exports = {
  projects: [
    {
      runner: '@jest-runner/electron/main',
      testEnvironment: 'node',
      testMatch: ['**/test/main/*.(spec|test).js']
    },
    {
      runner: '@jest-runner/electron',
      testEnvironment: '@jest-runner/electron/environment',
      testMatch: ['**/test/renderer/*.(spec|test).js']
    }
  ],
  runner: "@jest-runner/electron/main",
  testEnvironment: "node",
};
