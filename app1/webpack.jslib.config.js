const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './jslibduser.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'jslib_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
