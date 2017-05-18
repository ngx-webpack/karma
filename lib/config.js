'use strict';

let defaultConfig = require('./default');
let path = require('path');

class Config {
  constructor() {
    this._npmLifecycleEvent = process.env.npm_lifecycle_event || '';
  }

  calculate(options = {}) {
    let envConfig = this._getEnvConfig();

    return Object.assign(defaultConfig, envConfig, options);
  }

  _getEnvConfig() {
    let singleRun = this._isSingleRun();

    let travis = !!process.env.TRAVIS;

    return { singleRun, travis };
  }

  _isSingleRun() {
    return this._npmLifecycleEvent === 'test'
      || !!process.env.SINGLE_RUN;
  }
}

module.exports = Config;
