这个文件夹中我们介绍的是entry

### string

字符串的话主要针对一些单页面的应用，比如现在比较流行的框架都在使用的模式，可以看string文件夹，我们可以看到实例中我们把main.js文件中的代码打包到了bundle.js中，然后在index.html中引入了。

### array

其实字符串可以用array来表示，array代表的是什么呢，就是多对一的关系，多个文件打包到一个文件中，然后我们可以看array文件夹，文件夹中main1.js和main2.js的文件被打包到一个bundle.js中，然后将其引入到index.html中，然后我们打开index.html文件我们就可以看到main1.js和main2.js中的代码产生的效果，main1和main2这两个文件基本是不相互依赖的模块，比如我们项目中的一些公共模块，又或者是像我们引入的一些工具库，比如jq或者loadsh等工具库

### 对象

对于对象来说，就是多入口文件的了，在entry中就是键值对的形式存在，而且跟string特别相似，就是好多个string组成的，那么很形象，他也是一个多对多的形式。我们再来看一下object文件夹中的webpack.config.js文件夹中，其实简直对的key值可以是用路径来显示的，路径会webpack会帮助我们创建相对应的，我们可以看实例中的path/to/mian然后打包的时候webpack就帮我们创建好了如下的路径文件夹。

### 总结

其实到这里，我们基础知识也讲的差不多了，接下来可能在实际项目中，单页面的路径应该不是问题，而对于多页面的路径可能就要用到很多nodeJS的模块，比如fs,path,glob等，将路径组合成一个对象，然后应用到webpack中。