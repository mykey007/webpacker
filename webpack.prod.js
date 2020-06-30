const path = require('path')
const config = require('./webpack.config')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(config, {
   output: {
       filename: 'main.[contentHash].js',
       path: path.resolve(__dirname, "dist")
   },
   mode: 'production',
   plugins: [
       new CleanWebpackPlugin()
    ]
})