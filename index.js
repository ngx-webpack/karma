'use strict';

let karmaGenerator = require('./lib/index');
let Config = require('./lib/config');

let config = new Config();

module.exports = {
  config,
  karma: function(webpackConfig, options) {
    return karmaGenerator(webpackConfig, config.calculate(options));
  }
};
