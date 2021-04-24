import React from "react";
import { connect } from "react-redux";

class HomeChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "wangwu",
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProps.HomeChild.................", nextProps);
    console.log("nextState.HomeChild.................", nextState);
    return true;
  }
  componentDidUpdate(prevProps) {
    console.log("prevProps.HomeChild......11...........", prevProps);
    console.log("this.props.HomeChild......11...........", this.props);
  }
  handleClick() {
    console.log("this.state.HomeChild................", this.state);
    this.setState({
      name: "ermaiz",
    });
  }
  render() {
    return (
      <div>
        hello,<span>{this.props.name}</span>
        <br />
        my name is: <div>{this.state.name}</div>
        <button onClick={() => this.handleClick()}>child</button>
        <RenderProps render={(data) => <h1>Hello {data.target}</h1>} />
      </div>
    );
  }
}

class RenderProps extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'zhangsan',
      target: 'biguo',
    }
  }
  render(){
    return (
      <div>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      name: "zhangsan",
    };
  }
  componentWillMount() {
    console.log("组件将要加载...Home");
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps.nextProps.Home.................", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProps.Home.................", nextProps);
    console.log("nextState.Home.................", nextState);
    return true;
  }
  componentDidMount() {
    console.log("组件加载完成...Home");
  }
  componentWillUpdate() {
    console.log("组件将要更新...Home");
  }
  componentDidUpdate(prevProps) {
    console.log("prevProps.home.................", prevProps);
    console.log("this.props.home.................", this.props);
    console.log("组件更新完成....Home");
  }
  handleClick() {
    this.setState({
      num: this.state.num + 1,
      name: this.state.name + "1",
    });
    // this.forceUpdate();
  }
  render() {
    return (
      <div>
        hello,
        <span>react{this.state.num}</span>
        <button onClick={this.handleClick.bind(this)}>点我</button>
        <HomeChild name={this.state.name} />
      </div>
    );
  }
}

class ComB extends React.Component {
  render() {
    console.log("this.props.ComB...............", this.props);
    return (
      <div>
        {this.props.count}
        <div>
          <Home testProps={this.props.count} />
        </div>
      </div>
    );
  }
}

/**
 * 接受两个参数
 */
const mapStateToProps = (state) => {
  return state;
};

// B组件属于是接收方，那么需要实现connect方法的第一个参数
export default connect(mapStateToProps)(ComB);
