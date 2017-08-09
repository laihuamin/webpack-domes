## webpack-domes 系列
webpack在youtube上有一套很好的地址，可以看完那个之后，再来做着一系列的dome
## 开始的准备工作
1、安装npm模版
```
npm init -y
```
2、全局安装webpack和webpack-dev-server
```
npm i -g webpack@1.x webpack-dev-server@1.x
```
3、npm的安装
```
npm install
```
## dome01 —— entry file
新建一个index.html文件
```
<body>
    <script type="text/javascript" src="bundle.js"></script>
</body>
```
在建一个main.js文件
```
document.write('<h1>Hello World</h1>');
```
然后配置webpack-dev-server
```
module.exports = {
    entry: './main.js',  //打包的路口文件
    output: {
        filename: 'bundle.js'
    } //产出的文件
}
```
## dome02 —— Multiple entry file
新建一个index.html文件
```
    <script type="text/javascript" src="bundle1.js"></script>
    <script type="text/javascript" src="bundle2.js"></script>
```
在新建两个入口文件，main1.js和main2.js
```
//main1.js
document.write('<h1>Hello World</h1>');
//main2.js
document.write('<h2>Hello World</h2>');
```
在配置webpack-dev-server
```
module.exports = {
    entry: { //多个入口文件，并对其命名
        bundle1: './main1.js',
        bundle2: './main2.js'
    },
    output: { //打包完成后的文件名
        filename: '[name].js'
    }
}
```
