var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.vue']
    },
    entry: [
      './src/app.js'
    ],
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              "css-loader",
              "sass-loader"
            ]
          },
          {
            test: /\.vue$/,
            exclude: /(node_modules)/,
            loader: 'vue-loader'
          },
          {
            test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
            use: [
              {
               loader: "file-loader",
                options: {
                  outputPath: './images',
                  name: "[name].[ext]",
                },
              },
            ]
          },
          {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            use: 'babel-loader'
          },
            
        ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ],
    devServer: {
        historyApiFallback: true,
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
    }
}