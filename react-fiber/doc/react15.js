// 作为根文件使用， react15版本的渲染逻辑
const element = {
  "type": "div",
  "props": {
    "id": "A1",
    "children": [
      {
        "type": "div",
        "props": {
          "id": "B1",
          "children": [
            {
              "type": "div",
              "props": {
                "id": "C1",
                "children": "C1"
              },
            },
            {
              "type": "div",
              "props": {
                "id": "C2",
                "children": "C2"
              },
            }
          ]
        },
      },
      {
        "type": "div",
        "props": {
          "id": "B2",
          "children": "B2"
        },
      }
    ]
  },
}

/**
 * 
 * @params {*} element 虚拟DOM
 * @params {*} parentDOM 真实DOM
*/
// 如果节点多，层级特别深
// 因为JS是单线程，而且 UI渲染和JS 执行时互斥的
function render(element, parentDOM) {
  // 创建DOM元素
  let dom = document.createElement(element.type); // div
  // 处理属性
  Object.keys(element.props).filter(key => key !== 'children').forEach(key => {
    dom[key] = element.props[key];
  })
  if (Array.isArray(element.props.children)) {
    // 把每个子虚拟DOM变成真实DOM插入DOM节点里
    element.props.children.forEach(child => render(child, dom))
  }
  parentDOM.appendChild(dom)
}

render(element, document.getElementById('root'))