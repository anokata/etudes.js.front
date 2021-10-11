const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const PROD = JSON.parse(process.env.PROD_ENV || "0");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: PROD ? "main.min.js" : "main.js",
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, ".", "index.html"),
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, ""),
      },
      {
        directory: path.join(__dirname, "dist"),
      },
      {
        directory: path.join(__dirname, "css"),
      },
    ],
  },
  optimization: {
    // minimize: PROD,
    minimize: true,
    minimizer: [new TerserPlugin({ parallel: true }), new UglifyJsPlugin()],
  },
};
