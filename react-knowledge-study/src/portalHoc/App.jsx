import React, { Component } from "react";
import { message } from "antd";
import "antd/dist/antd.css";
import withPortal from './withPortal';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      a: 1,
    }
  }
  onOk(){
    message.info('提交成功');
  }
  render() {
    console.log("this.props1................", this.props);
    console.log("this.state1................", this.state);
    return (
      <div>
        <p>App</p>
        <div>
          <button onClick={() => this.props.confirm({
            title: '请确认',
            content: '是否提交？',
            onOk: () => this.onOk(),
          })}>提交</button>
        </div>
      </div>
    );
  }
}

export default withPortal(App);
