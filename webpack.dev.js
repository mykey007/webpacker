const path = require('path')
const config = require('./webpack.config')
const merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(config, {
   output: {
       filename: 'main.js',
       path: path.resolve(__dirname, "dist")
   },
   mode: 'development',
})