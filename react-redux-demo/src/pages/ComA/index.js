import React from 'react';
import { connect } from 'react-redux'

class ComA extends React.Component{
  handleClick = () => {
    console.log('this.props.ComA.................', this.props)
    //发送action
    this.props.snedAction()
  }
  render(){
    return (
      <button onClick={this.handleClick}>+</button>
    )
  }
}
/**
 * 这个函数要有一个返回值，返回值是一个对象
 * @params {*} dispatch
*/
const mapDispatchProps = (dispatch) => {
  return {
    snedAction: () => {
      // 利用 dispatch发送一个action
      // 传递action对象，我们定义一个type属性
      dispatch({
        type: 'add_action'
      })
    }
  }
}

// A是发送方，所以要实现connect第二个参数
export default connect(null, mapDispatchProps)(ComA)