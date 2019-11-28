const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,
  {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    devServer: {
      port: 8080,
      host: '0.0.0.0',
      contentBase: path.resolve(__dirname, '../public'),
      watchContentBase: true,
      hot: true,
      inline: true,
      public: '1232eddd.ap.ngrok.io',
    },
    output: {
      path: path.join(__dirname, '../dist'),
      filename: 'assets/[name].js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../public', 'index.html'),
        favicon: path.join(__dirname, '../public', 'favicon.ico'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, '../src/js'),
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              // creates style nodes from JS strings
              loader: "vue-style-loader",
              options: {
                sourceMap: true
              }
            },
            {
              // translates CSS into CommonJS
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              // Runs compiled CSS through postcss for vendor prefixing
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                ident: 'postcss',
                plugins: () => [
                  require('autoprefixer')({ overrideBrowserslist : 'last 2 versions' })
                ]
              }
            },
            {
              // compiles Sass to CSS
              loader: "sass-loader",
              options: {
                outputStyle: 'expanded',
                sourceMap: true,
                sourceMapContents: true,
                data: `
                  @import "@/assets/_variables.scss";
                `
              }
            }
          ],
        },
      ]
    },
  });
