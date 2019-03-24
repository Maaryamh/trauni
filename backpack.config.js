const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  webpack: (config, options) => {
    config.entry.main = ['./server/index.js'];

    return config;
  },
};
