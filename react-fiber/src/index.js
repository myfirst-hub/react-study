// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import element from "./element";
let container = document.getElementById('root')
const PLACEMENT = 'PLACEMENT' // 插入

// 下一个工作单元
// fiber 其实也是一个普通的JS对象
let workingInProgressRoot = {
  stateNode: container, // 此fiber对应的DOM节点
  props: { children: [element] }, // fiber的属性
  // child,
  // return,
  // sibling,
}

// 把赋给下一个工作单元
let nextUnitOfWork = workingInProgressRoot

function workLoop(deadline) {
  // 如果有当前的工作单元，就执行它，并返回一个工作单元
  while(nextUnitOfWork && deadline.timeRemaining() > 0) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
  }
  if (!nextUnitOfWork) {
    commitRoot()
  }
}

function commitRoot() {
  let currentFiber = workingInProgressRoot.firstEffect
  while(currentFiber) {
    console.log('commitRoot...........', currentFiber.props.id)
    if (currentFiber.effectTag === 'PLACEMENT') {
      currentFiber.return.stateNode.appendChild(currentFiber.stateNode)
    }
    currentFiber = currentFiber.nextEffect
  }
  workingInProgressRoot = null
}

/**
 * beginWork 1.创建此fiber的真实DOM 通过虚拟DOM创建fiber 结构
 * @params workingInProgressFiber
*/
function performUnitOfWork(workingInProgressFiber) {
  // 1.创建真实DOM，并没有挂载 2.创建fiber子树
  beginWork(workingInProgressFiber)
  if(workingInProgressFiber.child) { // 如果有儿子，返回儿子
    return workingInProgressFiber.child
  }
  while(workingInProgressFiber) {
    // 如果没有儿子，当前节点其实就结束完成了
    completeUnitOfWork(workingInProgressFiber)
    if (workingInProgressFiber.sibling) { // 如果有弟弟，返回弟弟
      return workingInProgressFiber.sibling
    }
    workingInProgressFiber = workingInProgressFiber.return // 指向父亲
  }
}

function beginWork(workingInProgressFiber) {
  console.log('beginWork..........', workingInProgressFiber.props.id)
  if (!workingInProgressFiber.stateNode) {
    workingInProgressFiber.stateNode = document.createElement(workingInProgressFiber.type)
    for(let key in workingInProgressFiber.props) {
      if (key !== 'children') {
        workingInProgressFiber.stateNode[key] = workingInProgressFiber.props[key]
      }
    }
  } // 在beginWork里是不会挂载的
  // 创建子fiber
  let previousFiber
  // children是一个虚拟DOM的数组
  if (Array.isArray(workingInProgressFiber.props.children)) {
    workingInProgressFiber.props.children.forEach((child, index) => {
      let childFiber = {
        type: child.type, // DOM节点类型div p
        props: child.props,
        return: workingInProgressFiber,
        effectTag: 'PLACEMENT', // 这个fiber对应的DOM节点需要被插入到页面中去，父DOM中去
        nextEffect: null, // 下一个有副作用的节点
      }
      if (index === 0) {
        workingInProgressFiber.child = childFiber
      } else {
        previousFiber.sibling = childFiber
      }
      previousFiber = childFiber
    })
  }
}

function completeUnitOfWork(workingInProgressFiber) {
  console.log('workingInProgressFiber..........', workingInProgressFiber.props.id)
  // 构建副作用链effectList 只有那些有副作用的节点
  let returnFiber = workingInProgressFiber.return
  if (returnFiber) {
    // 把当前fiber的有副作用子链表挂载到父亲身上
    if (!returnFiber.firstEffect) {
      returnFiber.firstEffect = workingInProgressFiber.firstEffect
    }
    if (!returnFiber.lastEffect) {
      if (returnFiber.lastEffect) {
        returnFiber.lastEffect.nextEffect = workingInProgressFiber.firstEffect
      }
      returnFiber.lastEffect = workingInProgressFiber.lastEffect
    }
    // 再把自己挂到后面
    if(workingInProgressFiber.effectTag) {
      if (returnFiber.lastEffect) {
        returnFiber.lastEffect.nextEffect = workingInProgressFiber
      } else {
        returnFiber.firstEffect = workingInProgressFiber
      }
      returnFiber.lastEffect = workingInProgressFiber
    }
  }
}

// 告诉浏览器在空闲的时间执行workLoop
requestIdleCallback(workLoop)
