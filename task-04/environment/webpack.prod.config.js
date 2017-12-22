const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(webpackConfig, {
    watch: false,
    plugins: [
        new UglifyJsPlugin({
            sourceMap: false
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true)
        })
    ],
});
