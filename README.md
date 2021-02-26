# Electron testing example

This is a bare-bones example of Electron automated testing using Jest.

## Setup

Install dependencies `npm install`


## Running the app

Run the app with `npm start`


## Automated tests

Unit tests `npm test`
Spectron end-to-end tests `npm run spectron`


## Notes

In addition to Electron this example uses

* [Jest]() as the test framework
* [Spectron]() for end-to-end tests
* [jest-electron-runner](https://github.com/facebook-atom/jest-electron-runner) as the test runner for Electron/Spectron
* [babel-jest](https://babeljs.io/) and [babel-plugin-rewire](https://github.com/speedskater/babel-plugin-rewire) to add special getters and setters for testing
