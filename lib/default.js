'use strict';

module.exports = {
  polyfills: [
    'ts-helpers',
    'core-js/client/shim',
    'zone.js/dist/zone',
    'zone.js/dist/long-stack-trace-zone',
    'zone.js/dist/async-test',
    'zone.js/dist/fake-async-test',
    'zone.js/dist/sync-test',
    'zone.js/dist/proxy',
    'zone.js/dist/jasmine-patch'
  ],
  useDlls: true,
  browsers: ['ChromeFast']
};
