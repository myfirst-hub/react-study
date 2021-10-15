import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashRouter as Router, Route, Link }  from "react-router-dom";

// 1.按需导入 react-router-dom 里面的三个组件
// I. BrowserRouter as Router（路由器）为前面的组件取一个别名，主要的原因是 react-router 提供了两个路由的容器
// 1. BrowserRouter (使用的 h5 history 实现的spa)
// 上线之后使用 BrowserRouter ，这种路由地址更加利于SEO。（url地址pathinfo利于搜索引擎收录）
// 2. HashRouter (使用的 hash 锚点实现的spa)  
// 开发阶段使用 HashRouter ，可以很好的看出页面是由 hash 跳转。（不利于SEO，因为对于搜索引用来说任何 hash 不是一个新的 url 地址，不会收录）
// 以上两者称之为：路由的容器，所有的路由操作都必须定义在该组件下面
// II. Router 翻译过来是路线的意思，需要该组件定义好路径和显示组件的对应关系

// III. Link 说白了就是一个 a 链接，实现声明式的跳转。

import Home from "./component/Home";
import News from "./component/News";
import Profile from "./component/Profile";
import MenuLink from './component/MenuLink';

// 1. 思考一个问题：如何实现导航条里面的当前项时高亮的？NavLink标签可以
// note: 这里我们使用的内置的 NavLink 实现了当前项高亮。下面尝试自己封装一个高亮的组件

// 如何自己封装呢？ 思路是如何实现的？
// 大致：如果我们的导航列表项 path 和地址栏里面的 hash 能够做匹配处理，匹配成功则加上一个高亮的类名即可

// 如何让每一项和地址栏里面的 hash 进行匹配？
// 另一种组件显示的方式 children

class App extends Component {
  reloadPage() {
    console.log(this, 'this.............')
  }
  // 注册hash监听事件
  componentDidMount() {
    window.addEventListener('hashchange',this.reloadPage.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.reloadPage.bind(this))
  }
  render() {
    return (
      <Router>
        {/**1. 规定：必须放在路由容器 */}
        <div>
          {/**2. 组件都必须存在一个根节点 */}
          <h1>react路由</h1>
          {/** 声明式路由，后面还有编程式的路由 */}
          <Link to="/home">首页</Link><br/>
          <Link to="/news">新闻列表</Link><br/>
          <Link to="/profile">个人中心</Link><br/>
          {/**children */}
          {/**由于现在要测试的内容很简单，直接使用函数式组件 */}
          {/**特性1：无论我们的 url 地址里面的 hash 是否和 path 进行怎样的匹配，对于 children 里面的组件都会被渲染出来 */}
          {/**特性2：children 函数式组件可以接受一个参数 props ，如果 path 和 hash 匹配上，则 props 里面的 match 属性就是一个对象，
           * 对象里面包含了地址相关的信息；如果匹配不上，值为 null ,但是组件还是渲染 */}
          {/**现在知道的 children 这个 api 我们可以尝试自己去封装一个 NavLink 的组件，然后在该组件里面有选择的生成一个高亮的导航项 */}
          <MenuLink to="/home" label="首页" />
          <MenuLink to="/news" label="新闻列表" />
          <MenuLink to="/profile" label="个人中心" />
          {/**3. 使用 route 定义映射关系，叫做路由表；路径对应的组件（页面） */}
          {/**I. to 代表要跳转的路径 2. component：显示的组件，页面 */}
          <Route path="/home" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/profile" component={Profile} />
          {/**render 函数的实现 */}
          {/**render 属性值是一个函数式组件，当前 url 地址和 path 匹配的时候，就会加载该函数式组件 */}
          {/**note: 当我们在使用 react-router 进行单页开发的时候，无论是函数式组件，还是类组件，props 里面都会包含当前 url 地址一些信息 */}
          <Route path="/render" render={(props) => {
            console.log('props...............', props);
            // 1. history 主要是做函数式导航
            // 2. location 代表的 url 地址信息
            // 3。 match 路由参数
            return (
              <div>
                <h2>render函数式组件的渲染</h2>
              </div>
            )
          }} />
        </div>
      </Router>
    );
  }
}

export default App;
