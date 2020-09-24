import React from './react';
import ReactDOM from './react-dom';

const ele = (
  <div className='active' title='123'>
    hello,<span>react</span>
  </div>
)

// function Home(){
//   return (
//     <div>
//       hello,<span>react</span>
//     </div>
//   )
// }

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num: 0
    };
  }
  componentWillMount(){
    console.log('组件将要加载');
  }
  componentReceiveProps(){
    console.log('props');
  }
  componentDidMount(){
    console.log('组件加载完成');
  }
  componentWillUpdate(){
    console.log('组件将要更新');
  }
  componentDidUpdate(){
    console.log('组件更新完成');
  }
  handleClick(){
    this.setState({
      num: this.state.num + 1,
    });
  }
  render(){
    return (
      <div>
        hello,
        <span>react{this.state.num}</span>
        <button onClick={this.handleClick.bind(this)}>点我</button>
      </div>
    )
  }
}

const title = 'active';

// 核心：组件化开发

// 两个问题：
// 1.为什么ReactDOM.render()必须引入React？
// 2.组件：函数组件，类组件

// ReactDOM.render('ele', document.querySelector('#root'));
ReactDOM.render(ele, document.querySelector('#root'));
// ReactDOM.render(<Home name={title} />, document.querySelector('#root'));

// const ele = /*#__PURE__*/React.createElement("div", {
//   className: "active",
//   title: "123"
// }, "hello,", /*#__PURE__*/React.createElement("span", null, "react"));