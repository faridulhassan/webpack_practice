const path = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');

module.exports = {
  entry: './src/ts/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: "ts.bundle.js",
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            // comments: true,
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ]
};