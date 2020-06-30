const path = require('path')
module.exports = {
   entry: './src/index.js',
   output: {
       filename: 'main.js',
       path: path.resolve(__dirname, "dist")
   },
   mode: 'development',
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