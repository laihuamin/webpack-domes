const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    plugins: [new HtmlWebpackPlugin()]
}