const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'inline-source-map',
  context: path.join(__dirname, '/app'),

  entry: {
    app: './app.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'/app/index.html')
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { presets: ['es2015'] },
        exclude: [/node_modules/]
      },
      {
        test: /\.vue$/, 
        loader: 'vue-loader' 
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader']
      }
    ]
  },

  resolve: {
    alias: {
      'vue': '../node_modules/vue/dist/vue.esm.js'
    }
  }
}