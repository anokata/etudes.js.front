const path = require('path');

module.exports = {
  entry: './idler01route.js',
  output: {
    filename: 'idler01route.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
