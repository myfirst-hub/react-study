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
   if(vnode.childrens && vnode.childrens.length > 0 || (out.childNodes && out.childNodes.length > 0)){
    // 对比组件和子节点
    diffChildren(out, vnode.childrens);
   }
   diffAttribute(out, vnode);
   return out;
}

function diffChildren(dom, vchildren){
  const domChildren = dom.childNodes;
  const children = [];
  const keyed = {};

  // 将有key的节点（用对象保存）和没有key的节点（用数组保存）分开
  if(domChildren && domChildren.length > 0){

  }
  if(vchildren && vchildren.length > 0){
    let min = 0;
    let childrenLen = children.length;
    [...vchildren].forEach((vchild, i) => {
      // 获取虚拟DOM中的所有key
      const key = vchild.key;
      let child;
      if(key){
        // 如果有key，找到对应key值的节点
        if(keyed[key]){
          child = keyed[key];
          keyed[key] = undefined;
        }
      }else if(childrenLen > min){
        // 如果没有key，则优先找类型相同的节点
        for(let j = min; j < childrenLen; j++){
          let c = children[j];
          if(c){
            child = c;
            children[j] = undefined;
            if(j === childrenLen - 1) childrenLen--;
            if(j === min) min++;
            break;
          }
        }
      }
      // 对比
      child = diffNode(child, vchild);
      // 更新DOM
      const f = domChildren[i];

      if(child && child !== dom && child !== f){
        // 如果更新前的对应位置为空，说明此节点是新增的
        if(!f){
          dom.appendChild(child);
          // 如果更新后的节点和更新前对应位置的下一个节点一样，
        }else if(child === f.nextSibling){
          removeNode(f);
          // 将更新后的节点移动到正确的位置
        }else{
          // 注意insertBefore的用法，第一个参数是要插入的节点
          dom.insertBefore(child, f);
        }
      }
    });
  }
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