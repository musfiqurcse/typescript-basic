 var path = require('path');

 module.exports = {
   entry: './first_ts.ts',
   resolve: {
     extensions: ['.webpack.js', '.web.js', '.ts', '.js']
   },
   module: {
     loaders: [
       { test: /\.ts$/, loader: 'ts-loader' }
     ]
   },
   output: {
     filename: 'output_file.js',
     path: path.resolve(__dirname, './')
   }
 }