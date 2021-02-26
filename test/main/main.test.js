const main = require('../../main');

describe('main', () => {
  test('it has an app', () => {
    console.log('main = ', main);
    const app = main.__get__('app');
    expect(app).toBeDefined();
  });
});
