const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var projectName = process.argv[3];
var argv = require('yargs').argv;
console.log('argv', argv.n)
 r = require('yargs')
  .alias('n', 'name')
  .alias('t', 'template').argv;
  console.log(r)
module.exports = {
    entry: `./src/${projectName}/main.js`,
    output:  {
        filename: '[name]_[chunkhash:8].js',
        path: path.resolve(__dirname,'./dist')
    },
    watch: true,
    watchOptions: {  
        ignored: /node_modules/  
    }, 
    module:{
        // rules:[
        //     {
        //         test: /\.css$/,
        //         loader: ExtractTextPlugin.extract({
        //             fallback: 'style-loader', 
        //             use: ['css-loader']
        //         })
        //     }, 
        // ]
        
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.vue$/,
            use: ['vue-loader']
          },
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'style-loader','css-loader'],
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: ['css-loader','sass-loader']
                })
            }, 
          ],
    },
    plugins: [
        new ExtractTextPlugin({filename:`[name].css`} ),
        new MiniCssExtractPlugin({
            filename: `[name]_[hash].css`,
            chunkFilename: `[id].css`,
          }),
        new HtmlWebpackPlugin({
            inject:true,
            template: './index.html'
        }),
        new CleanWebpackPlugin(),//清理构建文件夹
        new VueLoaderPlugin()
      ]
}