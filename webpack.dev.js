const {
  merge
} = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: '#source-map', //  错误追踪
  devServer: {
    port: 8000,
    open: true,
    hot: true,
    hotOnly: true
  },
})