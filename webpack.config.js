const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, 'public/index.html'),
            filename: './index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: './src/styles/style.css',
                to: ''
            }
        ])
    ],

}