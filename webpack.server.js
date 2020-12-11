const path = require('path');
const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.css",
  })],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              "@babel/preset-env", {
                "targets": {
                    "node": "current"
                } 
              }
            ],
            [
              "@babel/preset-react"
            ]
          ], "plugins": [
            "@loadable/babel-plugin",
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  }
};