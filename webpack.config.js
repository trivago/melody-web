var webpack = require('webpack');
var path = require('path');
var BabiliPlugin = require('babili-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    entry: {
        'sw': path.join(__dirname, 'src/components/serviceworker/sw.js'),
        'main': path.join(__dirname, 'src/index.js')
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'},
            {test: /\.scss$/, use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])},
            {test: /\.twig$/, use: ['babel-loader', 'melody-loader']},
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production')
        // }),
        // new LodashModuleReplacementPlugin(),
        // new BabiliPlugin({}, {comments: false}),
        new ExtractTextPlugin('main.css')
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      watchOptions: {
        ignored: /node_modules/,
      },
      overlay: false,
    }
};