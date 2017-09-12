<h3>一、前言</h3>

&nbsp;&nbsp;在这个 vue 系列的第一篇文章，我写过是 vue-cli-simple 脚手架的环境搭建。前段时间，也刚好给公司做了一个后台管理系统的产品，用的就是 vue-cli-simple。 一个月的时间将系统从无到上线，组件化、模块化开发的非常快速、可读性、复用性，整理架构清晰，易管理、维护。

&nbsp;&nbsp;所以，这次利用 vue-cli 完整版来实践一下。那么这个 simple 在哪呢？其实，simple 是 webpack-simple。这个脚手架的 webpack 有更全的功能。

&nbsp;&nbsp;而且，目录结构有了比较大变化。可自行去 github 克隆仓库到本地比较。我在开发完成后，将 Demo 打包放到了 xshell 上部署，发现只要在config 文件夹中的 index.js 稍稍改动就不会出现空白页 404 的情况。
<hr/><h3>二、仿网易云音乐</h3>

[vue-cli-demo github地址传送门](https://github.com/AllenChinese/vue-cli-demo)

![这里写图片描述](http://img.blog.csdn.net/20170907225318131?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvRE9DQUxMRU4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

这是一张 Demo 的截图，大致模块四个，header、carousel、pages、footer。主要功能，组件（页面间的切换），登录（cookie模拟，未使用数据库），轮播图组件，公共数据、状态管理。完成这个项目可以体验到：

	1、vue-cli 的环境搭建，项目目录。
	2、学习组件化、模块化开发。
	3、学习 vue 全家桶：vue-router 路由、vuex 状态管理。
	4、了解 webpack 的压缩、打包。
<hr/><h3>三、技术栈</h3>

	vue.js + vue-router + vuex + ElementUI

<h3>四、vue-cli 环境搭建</h3>

[vue（脚手架） 推荐开发环境](http://blog.csdn.net/docallen/article/details/68490256)，一文中详细的介绍了 simple 的环境搭建，而 vue-cli,只需要改成 `vue init webpack <项目名字>`，即可。

![这里写图片描述](http://img.blog.csdn.net/20170907232857591?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvRE9DQUxMRU4=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

<hr><h3>五、目录结构</h3>

```
|——build                                                //构建              

|——config                                               //配置

|——node_modules                                         //npm项目依赖

|——src	
	|——assets                                             //静态资源，图片
|	
	|——components——                                       //公共组件 
|			  |——carousel.vue                                 //轮播图组件
	|
|			  |——footerComponent.vue                          //底部组件
	|		
|			  |——headerComponent.vue                          //头部组件
	|
|			  |——navComponent.vue                             //红色部分
	|
|
	|——config——
|		      |——env.js                                     //开发api路径
	|
|		      |——fetch.js                                   //封装的异步请求
	|——data
|
	|——router——                                           //路由
|		      |——index.js
	|——service                                            //项目中全部的异步接口请求文件
|	
	|——store——                                            //vuex状态管理
|		     |——action.js
	|						
|		     |——index.js
	|
|		     |——mutations.js
	|——view——                                             //组件页面部分
|		    |——findMusicPage——
	|				 |——musicTypeController
|		    |
	|				 |——findMusicComponent.vue
|		    |——downloadComponent.vue
	|				
|		    |——friendComponent.vue	
	|				
|		    |——musicManComponent.vue
	|
|		    |——myMusicComponent.vue
	|——app.vue                                            //主文件
|			
	|——main.js                                            //主文件入口
|——static
	
|——test                                                 //单元测试

|——index.html	                                          //首页

|——package.json

|——README.md	
```
<hr/><h3>六、vue-cli-easy</h3>

这是我自己根据 vue-cli 环境，添加了 vue-router, vuex, api接口公共抽象配置，elementUI 的脚手架。你可以直接 clone 到你的 workspace 中，进行依赖的安装（npm install）,即可以进行自己的项目开发了。

项目地址传送门：[github vue-cli-easy 链接](https://github.com/AllenChinese/vue-cli-easy)
<hr>

**github 上的 README.md 持续的会完善 ... ...**



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

