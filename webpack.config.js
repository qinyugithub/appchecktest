const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/js/test.js',
  output: {
    filename: 'pa.js',
    //publicPath:'js/',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
    //   { test:/\.js$/, use:'babel-loader',exclude: /node_modules/ }
    ]
  },
  devServer:{
    open:true,
    port:3000,
    // contentBase:'dist/',
    hot:true
  }
};