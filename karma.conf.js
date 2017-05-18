'use strict';
console.log(require('./webpack.config'))
let karmaConfig = require('./').karma(require('./webpack.config'));

module.exports = (config) => {
  config.set(karmaConfig);
};
