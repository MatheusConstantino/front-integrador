const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".vue"]
  },
  entry: ["./src/app.js"],

  module: {
    rules: [
      {
        test: /\.(css|less|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader", "resolve-url-loader"]
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules)/,
        loader: "vue-loader"
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./src/assets/images/",
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader?name=/fonts/[name].[ext]"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    }
  },

  externals: {
    apiUrl: "http://localhost:8080/",
    closeURL: "axios",
    openURL: "axios",
    headers: {
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    }
  }
};
