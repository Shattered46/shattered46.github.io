const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  mode: 'production',
  devtool: 'inline-source-map',
  module: {
    rules: [
        {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.tsx$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
          }
        },
        
      ],
  },
  resolve: {
    modules: [ path.resolve('./'), path.resolve('./node_modules')], 
    extensions: ['.ts', '.tsx', '.js', ]
  }
}
