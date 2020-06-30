const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
   entry: './src/index.js',

   plugins: [
       new HtmlWebpackPlugin({
           template: './src/template.html'
       })
   ],
   module: {
       rules: [
           {
               test: /\.scss$/,
               use: [
                'style-loader',// 3. inject styles to dom
                'css-loader',  // 2. turns css into commonjs 
                'sass-loader', // 1. turns scss into css
            ],

           },
       ],
   },
}