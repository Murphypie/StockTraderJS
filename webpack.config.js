/** @format */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  // Webpack is reading index.js in client folder and compiling it into output object.
  entry: './client/index.js',
  // Compiled index.js is saved in the location specified output.
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.jpg', '.jpeg', '.png'],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: [/node_modules/, /client\/stylesheets\/modules/],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'StockTraderJS',
      template: './client/index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    hot: true,
    static:{
        // Tell the server where to serve content from.
        directory: path.resolve(__dirname, './client/'),

    /*The bundled files will be available in the browser under this path. 
    publicPath says that any request made to '/' will be served the development version of our bundle via localhost:8080. publicPath should match where we have index.html
    */
        publicPath: '/build',
        watch:true
    },
    historyApiFallback: true,
    // Proxy says taht any request made to '/api' will be routed to our server on localhost:3000
    // proxy should match whatever is going to match your fetch request on your frontend.
    proxy: {
      '/': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
};
