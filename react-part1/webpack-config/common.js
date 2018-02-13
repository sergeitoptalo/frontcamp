const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        "main": ["react-hot-loader/patch", "./src/index.jsx"]
    },
    output: {
        path: path.resolve(__dirname),
        publicPath: '/build/',
        filename: '[name].bundle.js',
    },
    devtool: 'source-map'
};

module.exports = config;
