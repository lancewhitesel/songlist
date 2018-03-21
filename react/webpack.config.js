const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const eslintFormatter = require('react-dev-utils/eslintFormatter');

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    port: 3000,
    // stats: "errors-only"
    proxy: {
      "/api": {
        target: "http://localhost:3300",
        pathRewrite: {"^/api" : ""}
      },
      "/falcor": {
        target: "http://localhost:3300",
        pathRewrite: {"^/falcor" : ""}
      }
    }
  },
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sass|scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Song List',
      minify: {
        collapseWhitespace: true
      },
      template: './src/index.ejs',
      hash: true
    }),
    new ExtractTextPlugin({
      filename: 'app.bundle.css',
      disable: false,
      allChunks: true
    })
  ]
};