const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //auto create html file
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js", //source for dist
  },
  output: {
    filename: "[name].[contenthash].js", //which file is output
    path: path.resolve(__dirname, "dist"),
    clean: true, //remove old bundles
  },
  devtool: "inline-source-map", //to get errors from inside the bundled js file
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: "asset/resource",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })], //auto create html from a template
};
