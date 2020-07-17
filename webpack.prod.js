const {
  merge
} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  // optimization: {
  //   minimize: true
  // },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"]
    }),
    new OptimizeCssAssetsPlugin() // css mini
  ]
})