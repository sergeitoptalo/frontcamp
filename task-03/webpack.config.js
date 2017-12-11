var path = require('path');
var webpack = require('webpack');
require('babel-polyfill');
require('whatwg-fetch');
require('./loaders/remove-number-attr-loader.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: ['babel-polyfill', 'whatwg-fetch', './scripts/index.js'],
    output: {
        path: path.resolve(__dirname, 'frontcamp/task-03/build'),
        publicPath: "build/",
        filename: 'main.js',
        chunkFilename: '[name].bundle.js'
    },
    watch: true,
    resolveLoader: {
        modules: [
          'node_modules',
          path.resolve(__dirname, 'loaders')
        ]
      },
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
            },
            {
                test: /\.json$/,
                loader: 'remove-number-attr-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};
