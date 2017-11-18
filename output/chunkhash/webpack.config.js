const path = require('path');

module.exports = {
    entry: {
        one: './main1.js',
        two: './main2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[chunkhash:4].js'
    }
}