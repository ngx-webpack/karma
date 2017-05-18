'use strict';

let path = require('path');

let alternativeConfig = {
  context: path.resolve(process.cwd(), 'src'),
  resolve: {
    modules: [
      path.resolve(process.cwd(), 'src'),
      'node_modules'
    ],
    extensions: [ '.ts', '.js', '.json' ]
  },
  stats: { errorDetails: true, colors: true, modules: true, reasons: true },
  node: {
    global: true,
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  },
  plugins: [

  ]
};

module.exports = require('ngx-webpack').webpack();
