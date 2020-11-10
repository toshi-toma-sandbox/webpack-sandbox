const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type import('webpack').Configuration */
module.exports = () => {
  return {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[chunkhash].js",
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
        },
      ],
    },
    resolve: {
      extensions: [".js", ".ts"],
    },
    plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      open: true
    }
  };
};
