module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: 'http://localhost:5000/',
        pathinfo: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.png$/,
                use: 'url-loader?limit=10000&name=./static/imgs/[hash].[ext]'
            }, 
            {
                test: /\.jpg$/,
                use: 'file-loader'
            }
        ]
    }
}