module.exports = {
    devtool: 'source-map',
    entry: './main.js',  //打包的路口文件
    output: {
        path: __dirname,
        filename: 'bundle.js'
    } //产出的文件
}