const path = require('path');

module.exports = {
    entry: './src/client/index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve('./public/js/'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    },
};
