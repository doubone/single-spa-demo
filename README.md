## 项目拆分demo 
### 项目创建   
>由于原始项目开始创建时使用的 老版本的`vue-cli`文档请移步[这里](https://github.com/vuejs/vue-cli/tree/v2#vue-cli--)，所以为了避免因版本差异造成的影响，接下来会一直使用`vue-cli`创建项目应用。
* root-html主应用  
    主应用中包含项目入口HTML文件，package.json配置文件
* base子应用  
    包含登录、登出、左侧菜单栏、导航栏；公共组件；导入依赖库vue、vuex、vue-router、element、私有npm库
* student子应用  
    包含学籍模块的所有业务代码  
***说明：此demo仅做演示功能，不是正式的项目开发***  
  
创建base、student子应用  
```
vue init webpack base 
enter or y 
修改启动端口：5001
vue init webpack student
enter or y
修改启动端口：5002
```
>知识点：vue项目如何配置serve启动项目，端口映射关系
创建root-html主应用
```
mkdir root-html
cd root-html
touch index.html//创建html模板文件
npm init 
npm install serve//下载serve依赖
"scripts": {
    "serve": "serve -s -l 5000"//添加serve脚本
  },
npm run serve //启动项目
```
### 项目创建
1、base子项目配置：
>依赖库：axios、element-ui、vuex
>utils-fetch.js
>compenents-login
>router.js
>搭建基础结构
2、student子项目配置：



