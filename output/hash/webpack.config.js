const path = require('path');

module.exports = {
    entry: {
        one: './main.js',
        two: './main1.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash:4].js'
    }
}