const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'production',
  output: {
    // If you want to set specific options for production build, do it here
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

