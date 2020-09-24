import { setAttribute } from './index';

export function diff(dom, vnode, container){
  //对比节点的变化
  const ret = diffNode(dom, vnode)
  console.log('ret.......................', ret);
  if(container){
    container.appendChild(ret)
  }
  return ret;
}

function diffNode(dom, vnode){
  let out = dom;
   // console.log('vnode.........', vnode);
   if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';
   // 如果是数字转成字符串
   if(typeof vnode === 'number') vnode = String(vnode);
   // 如果vnode是字符串
   if (typeof vnode === 'string') {
    // console.log('vnode......................', vnode)
    //  console.log('vnode......................', vnode.nodeType)
     if(dom && dom.nodeType === '3'){
      if(dom.textContent !== vnode){
        //更新内容
        dom.textContent = vnode;
      }
     }else{
      out = document.createTextNode(vnode);
      if(dom && dom.parentNode){
        dom.parentNode.replaceNode(out, dom);
      }
     }
     // 创建文本节点
     return out;
   }
   //非文本
   if(!dom){
    out = document.createElement(vnode.tag);
   }
   // 比较子节点（dom节点和组件）
   if(vnode.childrends && vnode.childrends.length > 0 || (out.childNodes && out.childNodes.length > 0)){
    // 对比组件和子节点
    // diffChildren(out, vnode.childrends);
   }
   diffAttribute(out, vnode);
   return out;
}

function diffChildren(dom, vchildren){

}

function diffAttribute(dom, vnode){
  const oldAttrs = {};
  const newAttrs = vnode.attrs;
  // dom 是原有的节点对象   vnode 是虚拟DOM
  const domAttrs = dom.attributes;
  console.log('domAttrs..................', domAttrs);
  [...domAttrs].forEach(item => {
    oldAttrs[item.name] = item.value;
  });

  // 比较
  // 如果原来属性跟新的属性对比，不在新的属性中，则将其移除（属性值为underfine）
  for(let key in oldAttrs){
    if(!(key in newAttrs)){
      setAttribute(dom, key, undefined);
    }
  }

  // 更新 class='active' abc
  for(let key in newAttrs){
    if(oldAttrs[key] !== newAttrs[key]){
      setAttribute(dom, key, newAttrs[key]);
    }
  }
}