const path = require('path');

module.exports = {
  entry: './tstestmod.ts',
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
    filename: 'tsmod_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
