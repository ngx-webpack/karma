'use strict';

let path = require('path');
let webpack = require('webpack');

let alternativeConfig = {
  context: path.resolve(process.cwd(), 'src'),
  resolve: {
    modules: [
      path.resolve(process.cwd(), 'src'),
      'node_modules'
    ],
    extensions: [ '.ts', '.js', '.json' ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      path.join(process.cwd(), 'src')
    ),
  ],
  module: {
    rules: [
      {
        test: /\.ts/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular-router-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        query: {
          removeAttributeQuotes: false,
          caseSensitive: true,
          customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
          ],
          customAttrAssign: [/\)?\]?=/]
        }
      },
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      }
    ]
  }
};

module.exports = alternativeConfig;
