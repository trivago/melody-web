var webpack = require('webpack');
var path = require('path');
var BabiliPlugin = require('babili-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var WorkboxBuildWebpackPlugin = require('workbox-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'sw': path.join(__dirname, 'src/components/serviceworker/sw.js'),
        'main': path.join(__dirname, 'src/index.js')
    },
    output: {
        path: path.join(__dirname, 'docs'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [require('babel-plugin-transform-object-rest-spread')]
                    }
                }
            },
            {test: /\.scss$/, use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])},
            {
                test: /\.twig$/,
                use: [
                        'babel-loader', 
                        {
                            loader: 'melody-loader',
                            options: {
                                plugins: ['idom']
                            }
                        }
                ]
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new BabiliPlugin({}, {comments: false}),
        new ExtractTextPlugin('main.css'),
        new CopyWebpackPlugin([
            { from: require.resolve('workbox-sw'), to: 'workbox-sw.js' }
        ]),
        new WorkboxBuildWebpackPlugin({
            globDirectory: './docs',
            globPatterns: ['**/*.{html,js,css,svg,md,png,json,ico}'],
            globIgnores: ['sw.js','workbox-sw.js'],
            swSrc: path.join(__dirname, 'src', 'components', 'serviceworker', 'sw.js'),
            swDest: path.join(__dirname, 'docs', 'sw.js'),
        })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'docs'),
      watchOptions: {
        ignored: /node_modules/,
      },
      overlay: false,
    }
};