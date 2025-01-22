// Import dependencies using ES module syntax
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import process from 'process' // Polyfill for process
import webpack from 'webpack';  // Import webpack for ProvidePlugin
import Dotenv from 'dotenv-webpack';  // Import dotenv-webpack to load .env variables
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import TerserPlugin from 'terser-webpack-plugin';


const __dirname = new URL('.', import.meta.url).pathname;

export default {
  mode: 'development',
  devtool: "source-map", // Generates source maps for debugging
  entry: './src/front/js/index.js',  // Ensure correct entry file
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js', // For non-entry chunks (async chunks)
    publicPath: './',
    clean: true, // Clean the output directory before each build
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // This will split both dynamic and static chunks
      minSize: 20000, // Minimum size for a chunk to be created
      maxSize: 100000, // Maximum size before Webpack splits it
      cacheGroups: {
          vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors', // This ensures that the vendor chunk has a unique name
              chunks: 'all',
              priority: -10,
          },
          default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
          },
      },
  },
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  stats: {
    all: false, // Turn off default logging
    errors: true,
    warnings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    timings: true,
    modules: true,
  },
  plugins: [
    // Load .env variables into the Webpack build
    new Dotenv(),  // Ensure .env is loaded into Webpack
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template.html'),  // Ensure the correct path
      inject: "body",  // Inject bundle into template
    }),
    new webpack.ProvidePlugin({
      process: 'process',
    }),
    new webpack.DefinePlugin({
      'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL || 'https://effective-palm-tree-5ww6qprg57rfwv7-3001.app.github.dev'),
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.ProgressPlugin({
      activeModules: true, // Show details for active modules
    }),
    new BundleAnalyzerPlugin(), // Opens a report in your browser

        
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Handle .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', ".json"],
    fallback: {
      process: 'process',  // Directly set the polyfill module here
    },
  },
};
