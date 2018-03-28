const path = require('path');

module.exports = {
    entry: './app/app.module.js',
    output: {
        path: path.resolve('./public/js/'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.html'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,

                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    mode: 'development'
                }
            },
            { test: /\.html$/, loader: "html-loader" }
        ]
    },
    devtool: "source-map",
}
