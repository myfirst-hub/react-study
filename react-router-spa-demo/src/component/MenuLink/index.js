// 这个组件时模拟 NavLink 的实现
// 功能：返回一个导航 Link 由于这个组件实现的很简单，不需要内部的状态，使用的 children 为函式组件

import React from "react";
import { Route, Link } from "react-router-dom";
import './index.css';

export default function MenuLink({to, label}) {
  //Router children特性：无论什么 url 地址，children 对于的组件都会显示；但是如果 url 地址跟 to 可以匹配，则 match 不为空
  return (
    <Route path={to} children={({match}) => {
      return <div><Link className={match ? 'active' : ''} to={to}>{label}</Link><br/></div>;
      }} />
  )
}
