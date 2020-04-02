const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

const hmr = mode => (mode === "dev"
  ? { hotModuleRepl: new webpack.HotModuleReplacementPlugin() }
  : null);

const getDevServer = mode => {
  const devS = {
    devServer: {
      contentBase: "./dist",
      historyApiFallback: true,
      hot: true
    }
  };
  return mode === "dev" ? devS : null;
};

const getDevTools = mode => (mode === "dev" ? { devtool: "source-map" } : null);

module.exports = env => ({
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "./img"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,

        loader: "file-loader",
        options: {
          outputPath: "./styles/fonts"
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: env === "dev" }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          env === "dev" ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: env === "dev" }
          },
          {
            loader: "postcss-loader",
            options: { sourceMap: env === "dev" }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: env === "dev" }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    hmr("dev").hotModuleRepl,
    new HtmlWebpackPlugin({
      template: path.resolve("./src/index.html")
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],

  ...getDevServer(env),
  ...getDevTools(env),

  optimization: {
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`
    }
  }
});
