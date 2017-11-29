var path = require('path');
var webpack = require('webpack');
require("babel-polyfill");

module.exports = {
    entry: ["babel-polyfill", './scripts/index.js'],
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
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
