const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mode = process.env.NODE_ENV || "development";

/** @type import('webpack').Configuration */
module.exports = () => {
  const devPlugins = mode === "development" ? [new BundleAnalyzerPlugin()] : [];
  return {
    mode, 
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      // filename: "[chunkhash].js",
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.jpe?g$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 5000,
              },
            },
          ],
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
    plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin(), ...devPlugins],
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      open: true,
      hot: true,
    },
  };
};
