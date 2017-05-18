'use strict';

let path = require('path');

module.exports = function(webpackConfig, { singleRun, useDlls, polyfills }) {
  let testFile = { pattern: 'src/app/test.ts' };
  let dllFile = { pattern: 'src/dll/angular.dll.js' };

  let polyfillFiles = polyfills
    .map(file => {
      return { pattern: require.resolve(file) };
    });

  let files = useDlls
    ? polyfillFiles.concat([dllFile, testFile])
    : polyfillFiles.concat([testFile]);

  return {
    basePath: process.cwd(),

    frameworks: ['jasmine'],

    files,

    preprocessors: {
      'src/app/test.ts': ['webpack', 'sourcemap']
    },

    reporters: ['dots'],

    webpack: webpackConfig,
    webpackServer: { noInfo: true },

    port: 9876,

    colors: true,

    logLevel: 'INFO',

    browsers: ['PhantomJS'],

    autoWatch: !singleRun,
    singleRun: singleRun
  };
};
