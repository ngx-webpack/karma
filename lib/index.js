'use strict';

module.exports = function(webpackConfig, config) {
  let testFile = { pattern: 'src/app/test.ts' };
  let dllFile = { pattern: 'src/dll/angular.dll.js' };

  let polyfillFiles = config.polyfills
    .map(file => {
      return { pattern: require.resolve(file) };
    });

  let files = config.useDlls
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

    browsers: config.browsers,

    customLaunchers: {
      ChromeFast: {
        base: 'ChromeHeadless',
        flags: [
          '--disable-component-extensions-with-background-pages',
          '--disable-renderer-backgrounding',
          '--disable-background-networking',
          '--disable-boot-animation',
          '--disable-cloud-import',
          '--disable-component-cloud-policy',
          '--disable-component-update',
          '--disable-default-apps',
          '--disable-sync',
          '--bwsi',
          '--disable-gpu'
        ]
      }
    },

    mime: {
      'text/x-typescript': ['ts']
    },

    autoWatch: !config.singleRun,
    singleRun: config.singleRun
  };
};
