const CopyPlugin = require("copy-webpack-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolve = require("path").resolve;

const resolvePath = (path) => resolve(__dirname, path);

const configMode = process.env.NODE_ENV || "development";
const isDevMode = configMode === "development";
const configTarget = isDevMode ? "web" : "browserslist";
const configDevtool = isDevMode ? "eval-source-map" : "source-map";

module.exports = {
  target: configTarget,
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
    port: 9000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    alias: {
      "@/api": resolvePath("./src/api"),
      "@/components": resolvePath("./src/components"),
    },
    extensions: [".jsx", "..."],
  },
  plugins: [
    new DotenvWebpackPlugin(),
    new HtmlWebpackPlugin({ template: resolvePath("./public/index.html") }),
    new CopyPlugin({
      patterns: [
        {
          from: resolvePath("./public"),
          to: resolvePath("./dist"),
          filter: (resourcePath) => !resourcePath.endsWith("/index.html"),
        },
      ],
    }),
  ],
};
