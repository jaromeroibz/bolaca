const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/front/build/static/js/index.js', // Adjusted to a simpler format
  output: {
    filename: '[name].js',  // Use chunk names to generate unique filenames
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'), // Ensure correct directory for serving static files
    },
    historyApiFallback: true, // Ensures React routing works
    port: 3000, // Port to run the dev server
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/, 
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/, 
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' },
        },
      },
      { 
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, 
        use: ['file-loader'] 
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: '4geeks.ico',
      template: 'template.html', // Make sure this path is correct
    }),
    new Dotenv({ safe: true, systemvars: true }),
  ],
};
