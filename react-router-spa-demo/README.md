## react-router
今天开始学习 react 的生态圈，第一个就是 react-router(路由)。有了 react-router 之后，我们就可以使用 react 开发 spa 应用。

## 什么是 spa 应用？
答：single page application 单页应用，就是所有的功能都是在一个页面进行完成的。这个主要和传统的PC端网页比较形成的（都是a链接跳转）。主要是单页的用户体验类似 native app（原生的app就是手机里面的那些app，一般都存在底部导航栏，在做切换的时候，页面上很多的内容会被复用）的体验。 

## spa 底层原理用的是什么？
spa 就是在一个页面完成所有的功能，但是并不是一股脑的全部显示出来，到底什么时间，什么操作展示什么内容，如何实现的呢？
答：1. 锚点（hash）window.onhashchange 2. h5(history) 3. ajax 可以（问题：不能历史记录） 4. iframe 框架集（1. seo不友好 2. 操作不方便 3. 最先的 HTML5 建议框架集废除）

## 什么是 react-router ？
答：react-router 是第三方为 react 开发单页应用开发出来的一个库。有了它就可以开发SPA应用。如果我们要使用，则必须先安装该库。
官网：https://reactTraining.com/react-router
源码地址：https://github.com/ReactTraining/react-router