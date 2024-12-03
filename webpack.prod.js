const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].js',  // Use chunk names to generate unique filenames
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  optimization: {
    minimize: true, // Minify the output for production
    splitChunks: {
      chunks: 'all', // Split common chunks to optimize caching
    },
  },
  plugins: [
    new Dotenv({ safe: true, systemvars: true }), // Ensure your environment variables are correctly loaded
  ],
});

