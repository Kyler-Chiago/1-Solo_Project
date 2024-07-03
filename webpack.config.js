/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry point of our app
  entry: [
    './client/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8080,
    // match the output path
    static: {
      // publicPath:'/dist',
      directory: path.resolve(__dirname, 'dist'),
      // match the output 'publicPath'
      publicPath: '/',
    },
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    // proxy: [{
    //   '/api/**': {
    //     target: 'http://localhost:8080/',
    //     secure: false,
    //     router: function (req) {
    //       console.log('Proxy router', req.hostname);
    //       return 'http://localhost:3000';
    //     },
    //   },
    //   '/assets/**': {
    //     target: 'http://localhost:8080/',
    //     secure: false,
    //     router: function (req) {
    //       console.log('Proxy router', req.hostname);
    //       return 'http://localhost:3000';
    //     },
    //   },
    // }],
    proxy: [
      {
        context:['/**'],
        target: 'http://localhost:3000',
        secure: false,
      },
      // {
      //   context:['/api/**'],
      //   target: 'http://localhost:3000',
      //   secure: false,
      // },
      // {
      //   context:['/assets/**'],
      //   target: 'http://localhost:3000',
      //   secure: false,
      // }
    ]
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,  // add whatever files you wanna use within this regEx
        use: ['file-loader'],
      },
      // {
      //   test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
      //   use: [
      //     {
      //       // loads files as base64 encoded data url if image file is less than set limit
      //       loader: 'url-loader',
      //       options: {
      //         // if file is greater than the limit (bytes), file-loader is used as fallback
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
};
