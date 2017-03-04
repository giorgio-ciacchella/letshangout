
const config = require('./basic.webpack.config').config;

const path = require('path');


const frontendConfig = config({
  entry: './react/Document',
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'frontend.js',
    __filename: true,
    library: 'Document',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.jsx'],
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    ],
  },
});

module.exports = frontendConfig;
