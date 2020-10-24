import React from 'react';
import { connect } from 'react-redux'

class ComB extends React.Component{
  render(){
    console.log('this.props................', this.props)
    return (
    <div>{this.props.count}</div>
    )
  }
}

/**
 * 接受两个参数
*/
const mapStateToProps = (state) => {
  return state
}

// B组件属于是接收方，那么需要实现connect方法的第一个参数
export default connect(mapStateToProps)(ComB)