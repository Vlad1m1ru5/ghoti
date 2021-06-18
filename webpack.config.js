const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = require("path").resolve;
const HotModuleReplacementPlugin =
  require("webpack").HotModuleReplacementPlugin;

const resolvePath = (path) => resolve(__dirname, path);

const configMode = process.env.NODE_ENV || "development";
const isDevMode = configMode === "development";
const configDevtool = isDevMode ? "eval-source-map" : "source-map";

module.exports = {
  entry: {
    main: resolvePath("./src/index.js"),
  },
  output: {
    path: resolvePath("./dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  mode: configMode,
  devtool: configDevtool,
  devServer: {
    contentBase: resolvePath("./dist"),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolvePath("./public/index.html") }),
    new HotModuleReplacementPlugin(),
  ],
};
