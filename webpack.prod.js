import { merge } from 'webpack-merge';  // Import merge function
import common from './webpack.common.js';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'; // Import the plugin
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
const __dirname = new URL('.', import.meta.url).pathname;

export default merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
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
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js',
    publicPath: './',
    chunkFilename: '[name].[contenthash].chunk.js',
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',  // Generates a manifest file
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template.html'),
      inject: 'body',
    }),
  ],
});
