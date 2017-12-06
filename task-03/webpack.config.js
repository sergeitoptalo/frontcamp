var path = require('path');
var webpack = require('webpack');
require('babel-polyfill');
require('whatwg-fetch');

module.exports = {
    entry: ['babel-polyfill', 'whatwg-fetch', './scripts/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/assets/",
        filename: 'main.js'
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
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
};
