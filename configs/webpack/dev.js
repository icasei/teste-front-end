// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: './index.js',
  devtool: 'cheap-module-eval-source-map',
  plugins: []
});