'use strict';

let karmaConfig = require('./').karma(require('./webpack.config'), { useDlls: false });

module.exports = (config) => {
  config.set(karmaConfig);
};
