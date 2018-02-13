/* var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: ['./src/index.jsx'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            test: \/.js$/,
            loader: 
        ]
    }
}
 */

const path = require('path');

module.exports = {
    entry: './src/index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve('./public/js/'),
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
            },
        ],
    },
};
