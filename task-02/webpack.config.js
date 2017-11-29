var path = require('path');
var webpack = require('webpack');
require("babel-polyfill");
require("element-dataset");


module.exports = {
    entry: ["babel-polyfill", "element-dataset", './scripts/index.js'],
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
