const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve(__dirname, 'src/ts');
const DESTINATION = path.resolve(__dirname, 'dist/js');

module.exports = {
  // context: ROOT,

  entry: {
    'main': './src/ts/index.ts'
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },

/*  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      ROOT,
      'node_modules'
    ]
  },*/

  module: {
    rules: [
      /****************
       * PRE-LOADERS
       *****************/
/*
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'tslint-loader'
      },
*/

      /****************
       * LOADERS
       *****************/
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: 'awesome-typescript-loader'
      }
    ]
  },

  // devtool: 'cheap-module-source-map',
  devServer: {}
};

