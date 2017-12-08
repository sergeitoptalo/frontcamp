var path = require('path');
var webpack = require('webpack');
require('babel-polyfill');
require('whatwg-fetch');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: ['babel-polyfill', 'whatwg-fetch', './scripts/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/build/",
        filename: 'main.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};
