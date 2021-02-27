'use strict';

const path = require('path');
const Application = require('spectron').Application;
const electronPath = require('electron');

describe("Hello", () => {
  beforeEach(() => {
    this.app = new Application({
      path: electronPath,
      args: [path.join(__dirname, '..')],
    });
    return this.app.start();
  });

  afterEach(() => {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  it("displays a window", async () => {
    const count = await this.app.client.getWindowCount();
    expect(count).toEqual(1);
  });

  it("has the correct title", async () => {
    const title = await this.app.client.getTitle();
    expect(title).toEqual("Hello World!");
  });

  it("does not have the developer tools open", async () => {
    const devToolsAreOpen = await this.app.client
          .browserWindow
          .isDevToolsOpened();
    expect(devToolsAreOpen).toBeFalsy();
  });
});
