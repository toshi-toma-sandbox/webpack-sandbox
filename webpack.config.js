const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type import('webpack').Configuration */
module.exports = () => {
  return {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      // filename: "[chunkhash].js",
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader","css-loader"]
        },
        {
          test: /\.jpe?g$/,
          use: ["url-loader"]
        },
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
      open: true,
      hot: true
    }
  };
};
