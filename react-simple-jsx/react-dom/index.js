const ReactDOM = {
  render,
}

function render(vnode, container) {
  console.log('vnode.........', vnode);
  if (vnode === undefined) return;

  // 如果vnode是字符串
  if (typeof vnode === 'string') {
    // 创建文本节点
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
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
  childrens.forEach(node => render(node, dom));

  return container.appendChild(dom);

  // 设置属性
  function setAttribute(dom, key, value) {
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

}

export default ReactDOM;