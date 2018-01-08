let runAppCode = event => require.ensure([], require => require('./runApp.js').default(this.store));

var path = require('path');
var webpack = require('webpack');
require('babel-polyfill');
require('whatwg-fetch');
require('./loaders/remove-number-attr-loader.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', 'whatwg-fetch', './scripts/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/build/",
        filename: 'main.js',
        chunkFilename: '[name].main.js'
    },
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
            },
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
        new ExtractTextPlugin("styles.css"),
      ],
    stats: {
        colors: true
    },
    devtool: 'source-map',
};
