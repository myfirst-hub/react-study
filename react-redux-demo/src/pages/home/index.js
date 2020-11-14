import React from 'react';
//导入store
import store from '../../store'
//导入action构建函数
import { sendAction } from '../../action'

export default class Home extends React.Component {
  handleClick = () => {
    const action = sendAction();
    // 发送一个action 利用store
    store.dispatch(action);
  }
  // 当组件已加载完毕时来监听
  componentDidMount(){
    store.subscribe(() => {
      console.log('store.getState()/.................. ', store.getState());
      this.setState({})
    })
  }
  render(){
    return (
      <>
        <button onClick={this.handleClick}>点我，发送一个action</button>
        <div>{store.getState().value}</div>
      </>
    )
  }
}