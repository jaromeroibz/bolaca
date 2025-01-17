import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'; // Import the plugin
import webpack from 'webpack';
const __dirname = new URL('.', import.meta.url).pathname;

export default {
  mode: 'development',
  entry: './src/front/js/index.js',  // Ensure this is the correct entry point
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: './',
  },
  devtool: 'cheap-module-source-map',
  stats: {
    errorDetails: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Ensure it's set to 'development'
    }),
    // other plugins...
  ],
  devServer: {
    static: path.resolve(__dirname, 'build'),
    port: 3001,
    hot: true,
    open: true,
    historyApiFallback: true,  // Important for SPA routing
  },
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
};
