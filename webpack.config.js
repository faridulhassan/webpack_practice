const path = require('path');
module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: "manual.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            pluginss: [require('@babel/plugin-transform-object-rest-spread')],
          }
        }
      }
    ]
  }
};