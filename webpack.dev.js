import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

const __dirname = new URL('.', import.meta.url).pathname;

export default merge(common, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    publicPath: '/'
  },
  stats: {
    errorDetails: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    proxy: [{
      context: ['/api'],
      target: process.env.BACKEND_URL || 'http://localhost:3001',
      pathRewrite: { '^/api': '/api' },
      secure: false,
      changeOrigin: true,
      onProxyReq: function(proxyReq) {
        // Remove double slashes from the path
        proxyReq.path = proxyReq.path.replace(/\/+/g, '/');
      }
    }],
    client: {
      webSocketURL: 'ws://localhost:3000/ws',  // Ensure this uses the correct protocol (ws:// or wss://)
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    static: {
      directory: path.join(__dirname, 'public'),
    }  
  }
});
