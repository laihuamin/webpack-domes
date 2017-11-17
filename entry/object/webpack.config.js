module.exports = {
    entry: {
        one: './main1.js',
        two: './main2.js',
        'path/to/main': './main3.js'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    }
}
