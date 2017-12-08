const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('../webpack.config.js');

module.exports = merge(webpackConfig, {
    devtool: 'source-map',

    devServer: {
        inline: true,
        contentBase: 'scripts',
        hot: true,
        port: '3000',
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(false)
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

});
