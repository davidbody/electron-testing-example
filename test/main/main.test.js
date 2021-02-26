const main = require('../../src/main');

describe('main', () => {
  test('it has an app', () => {
    const app = main.__get__('app');
    expect(app).toBeDefined();
  });
});
