import React from './react';
import ReactDOM from './react-dom';

const ele = (
  <div className='active' title='123'>
    hello,<span>react</span>
  </div>
)

// 核心：组件化开发

// 两个问题：
// 1.为什么ReactDOM.render()必须引入React？
// 2.组件：函数组件，类组件

// ReactDOM.render('ele', document.querySelector('#root'));
ReactDOM.render(ele, document.querySelector('#root'));

// const ele = /*#__PURE__*/React.createElement("div", {
//   className: "active",
//   title: "123"
// }, "hello,", /*#__PURE__*/React.createElement("span", null, "react"));