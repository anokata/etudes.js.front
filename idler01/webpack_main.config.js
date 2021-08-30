const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: /node_modules/,
  },
};

