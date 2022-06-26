import React from 'react';
import { connect } from 'react-redux/src/index'

class SonComponent extends React.Component{
  handleClick = () => {
    console.log('this.props.SonComponent.................', this.props)
    //发送action
    this.props.sendActionSon()
  }
  render(){
    console.log('this.props....SonComponent............', this.props)
    return (
      <button onClick={this.handleClick}>son</button>
    )
  }
}

/**
 * 接受两个参数
 */
const mapStateToProps = (state, ownProps) => {
  console.log('ownProps..SonComponent...............', ownProps)
  console.log('state.....SonComponent............', state)
  return state;
};

// React-Redux 自动为我们做以下转换:
// dispatch => bindActionCreators(mapDispatchToProps, dispatch);
export default connect(mapStateToProps, {
  sendActionSon: () => ({
    type: 'add_action_son'
  })
})(SonComponent)