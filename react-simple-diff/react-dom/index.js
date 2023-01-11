import Component from '../react/component';
import { diff } from './diff'

const ReactDOM = {
  render,
}

function render(vnode, container, dom){
  console.log('vnode......................', vnode);
  return container.appendChild(_render(vnode));
  // return diff(dom, vnode, container);
}

export function renderComponent(comp){
  let base;
  const renderer = comp.render(); // jsx对象
  base = _render(renderer);
  if(comp.base && comp.componentWillUpdate){
    comp.componentWillUpdate();
  }
  if(comp.base){
    if(comp.componentDidUpdate) comp.componentDidUpdate();
  }else{
    if(comp.componentDidMount) comp.componentDidMount();
  }

  // 节点替换
  if(comp.base && comp.base.parentNode){
    console.log('comp.base.parentNode......................', comp.base.parentNode)
    console.log('comp.base......................', comp.base)
    console.log('base.111.....................', base.nodeType)
    comp.base.parentNode.replaceChild(base, comp.base);
  }
  comp.base = base;
  console.log('comp..............', comp);
}

function setComponentProps(comp, props){
  if(!comp.base){
    if(comp.componentWillMount) comp.componentWillMount();
  }else if(comp.componentReceiveProps){
    comp.componentReceiveProps();
  }
  // 设置组件的属性
  comp.props = props;
  // 渲染组件
  renderComponent(comp);

}

function createComponent(comp, props){
  let inst;
  if(comp.prototype && comp.prototype.render){
    // 如果是类定义的组件 则创建实例返回
    inst = new comp(props);
  }else{
    // 如果是函数组件 将函数组件扩展成类组件 方便后面统一管理
    inst = new Component(props);
    inst.constructor = comp;
    inst.render = function(){
      return this.constructor(props);
    }
  }
  console.log('inst......................', inst)
  return inst;
}

function _render(vnode) {
  // console.log('vnode.........', vnode);
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';
  // 如果是数字转成字符串
  if(typeof vnode === 'number') vnode = String(vnode);
  // 如果vnode是字符串
  if (typeof vnode === 'string') {
    console.log('vnode......................', vnode.nodeType)
    // 创建文本节点
    return document.createTextNode(vnode);
  }

  // 如果tag是函数，则渲染组件
  if(typeof vnode.tag === 'function'){
    // console.log('vnode.tag..............', vnode.tag);
    // console.log('vnode.attrs..............', vnode.attrs);
    // 1.创建组件
    const comp = createComponent(vnode.tag, vnode.attrs);
    // console.log('comp..............', comp);
    // return;
    // 2. 设置组件的属性
    setComponentProps(comp, vnode.attrs);
    // 3.组件渲染的节点对象返回
    return comp.base;
  }


  // 否则就是虚拟DOM对象
  const {
    tag,
    attrs,
    childrens = [],
  } = vnode;
  // 创建节点对象
  const dom = document.createElement(tag);
  if (attrs) {
    // 有属性
    Object.keys(attrs).forEach(key => {
      const value = attrs[key];
      setAttribute(dom, key, value);
    });
  }

  // 递归渲染子节点
  childrens.forEach(node => {
    render(node, dom)
  });

  return dom;
}

// 设置属性
export function setAttribute(dom, key, value) {
  //将属性名className转换成class
  if (key === 'className') {
    key = 'class';
  }
  // 如果是事件 onClick onBlur ...
  if (/on\w+/.test(key)) {
    //转小写
    key = key.toLowerCase();
    dom[key] = value || '';
  } else if (key === 'style') { // 针对属性为style的处理
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (value && typeof value === 'object') {
      for (let k in value) {
        // {width: 20}
        if (typeof value[k] === 'number') {
          dom.style[k] = value[k] + 'px';
        } else {
          dom.style[k] = value[k];
        }
      }
    }
  } else {
    // console.log('dom................', dom);
    // console.log('key................', key);
    // console.log('key in dom................', key in dom);
    // 其他属性
    if (key in dom) {
      dom[key] = value || ''
    }
    if (value) {
      // 更新值
      dom.setAttribute(key, value);
    } else {
      dom.removeAttribute(key);
    }
  }
}

export default ReactDOM;