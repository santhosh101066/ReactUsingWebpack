const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename:'index.html',
  inject: 'body'
})
module.exports={
    entry:'./index.js',
    mode:'development',
    output:{
        path:path.resolve('dist'),
        filename:'index_bundle.js',
        clean:true,
        publicPath:'/'
    },
    stats:{
        warnings:false
    }
    ,
    module:{
        rules:[
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
    },
    devServer:{
      open:true,
      historyApiFallback:true,
      
    },
     plugins: [HtmlWebpackPluginConfig, new ESLintWebpackPlugin()]
}