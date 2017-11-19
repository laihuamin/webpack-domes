const path = require('path');

module.exports = {
    entry: ['./main.js', './main2.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        pathinfo: true
    }
}