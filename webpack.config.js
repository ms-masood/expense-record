


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              {
                plugins: [
                  "@babel/plugin-proposal-class-properties",
                  "@babel/plugin-proposal-nullish-coalescing-operator",
                  "@babel/plugin-proposal-optional-chaining",
                ],
              },
            ],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["url-loader?limit=10000", "img-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    publicPath: '/',
    outputPath: path.resolve(__dirname, "dist"),
    stats: {colors: true},
    host: '127.0.0.1',
    inline: true,
    port: '8060',
    quiet: false,
    noInfo: false,
  },
};
