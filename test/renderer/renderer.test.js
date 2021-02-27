'use strict';

describe('renderer', () => {
  test('something', () => {
    document.body.innerHTML = '<div id="today-element"></div>';
    require('../../src/renderer');
    expect(document.body.innerHTML).toMatch(/today is \w+day/i);
  });
});
