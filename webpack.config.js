var NODE_ENV=process.env.NODE_ENV || 'development';
var webpack=require('webpack');
var path = require('path');

module.exports = {
  entry: {
    main:['webpack-dev-server/client?http://localhost:8080/','webpack/hot/only-dev-server','./src/index']
  },
  output: {
    path: __dirname+'/dist',
    filename: 'bundle.js',
  },
  watch:NODE_ENV==='development',
  devtool:'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot','babel'],
      include: path.join(__dirname, 'src')
    }]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    hot:true
  }
};
