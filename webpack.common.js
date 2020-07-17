const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader');

console.log(process.env.NODE_ENV)
module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.NODE_ENV == 'production' ? '/dist/' : '/'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [{
        loader: "vue-loader",
        options: {
          loaders: {
            less: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
            css: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
          }
        }
      }]
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }, {
      test: /\.less$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: "[name].[ext]",
          outputPath: "images/",
          // limit: 10240,
          esModule: false
        }
      }]
    }, {
      test: /\.js$/,
      use: ["babel-loader"],
      include: /src/,
      exclude: /node_modules/
    }, {
      test: /\.(woff|woff2|eoit|ttf|otf)$/,
      use: ['file-loader']
    }, {
      test: /\.(csv|tsv)$/,
      use: ["csv-loader"]
    }, {
      test: /\.xml$/,
      use: ["xml-loader"]
    }, {
      test: /\.txt$/,
      use: ["raw-loader"]
    }]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Output Management',
      filename: 'index.html',
      template: './src/template/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      // chunkFilename: '[name].chunk.[hash].css',
      allChunks: true
    }),
    new VueLoaderPlugin()
  ]
}