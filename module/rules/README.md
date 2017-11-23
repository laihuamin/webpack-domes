### rules

对于rules来说，是一个数组，数组中的元素每一个都是对象，创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。这些规则能够对模块(module)应用 loader，或者修,改解析器(parser)。
<br/><br/>
rule分为三部分，condition、result和嵌套规则。

### babel-loader配置
babel是现在不可或缺的一部分，因为前端发展太快，需要兼容旧的东西也太多，所以我们用的es6的语法需要用babel转换成es5的东西来保证兼容性，所以babel-loader是我们需要的，其基本配置如下：
```
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }
    ]
}
```