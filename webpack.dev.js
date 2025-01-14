const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const port = 3001;
let publicUrl = `ws://localhost:${port}/ws`;

// Specific handling for Gitpod or Codespaces (use if needed)
if(process.env.GITPOD_WORKSPACE_URL){
  const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
  publicUrl = `wss://${port}-${host}/ws`;
}

if(process.env.CODESPACE_NAME){
  publicUrl = `wss://${process.env.CODESPACE_NAME}-${port}.app.github.dev/ws`;
}

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: process.env.PORT || 3001, // Use Render's PORT or default to 3000
    hot: true, // Hot Module Replacement
    allowedHosts: "all", // Allow all hosts
    historyApiFallback: true, // Serve index.html for React SPA routing
    static: {
      directory: path.resolve(__dirname, 'src/front/build'), // Ensure the static files are served from the build directory
    },
    client: {
      webSocketURL: publicUrl, // Use WebSocket URL for hot reload (only if necessary)
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable Hot Module Replacement
  ],
});

