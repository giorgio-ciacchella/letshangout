const DeepMerge = require('deep-merge');
const webpack = require('webpack');
const fs = require('fs');

const deepmerge = DeepMerge(function (target, source) {
  if (target instanceof Array) {
    return [].concat(target, source);
  }
  return source;
});

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

// generic

const defaultConfig = {
  target: 'node',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    ],
  },
  node: {
    __dirname: true,
  },
  externals: nodeModules,
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: false }),
  ],
  devtool: 'sourcemap',
};

if (process.env.NODE_ENV !== 'production') {
  defaultConfig.devtool = 'source-map';
  defaultConfig.debug = true;
}

function config(overrides) {
  return deepmerge(defaultConfig, overrides || {});
}

module.exports.config = config;
