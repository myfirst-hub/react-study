import React, { Fragment } from 'react';
import { connect } from 'react-redux/src/index'
// import SonComponent from '../SonComponent';

class ComA extends React.Component{
  handleClick = () => {
    console.log('this.props.ComA.................', this.props)
    //发送action
    this.props.sendAction()
  }
  render(){
    console.log('this.props.................', this.props)
    return (
      <Fragment>
        <button onClick={this.handleClick}>+</button>
        {/* <SonComponent son="sonValue" /> */}
      </Fragment>
    )
  }
}

/**
 * 接受两个参数
 */
const mapStateToProps = (state, ownProps) => {
  console.log('ownProps.................', ownProps)
  console.log('state.................', state)
  return state;
};
/**
 * 这个函数要有一个返回值，返回值是一个对象
 * @params {*} dispatch
*/
const mapDispatchProps = (dispatch) => {
  return {
    sendAction: () => {
      // 利用 dispatch发送一个action
      // 传递action对象，我们定义一个type属性
      dispatch({
        type: 'add_action'
      })
    }
  }
}

// A是发送方，所以要实现connect第二个参数
export default connect(mapStateToProps, mapDispatchProps, (stateProps, dispatchProps, ownProps) => {
  console.log('stateProps..............', stateProps)
  console.log('dispatchProps..............', dispatchProps)
  console.log('ownProps..............', ownProps)
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
  }
})(ComA)