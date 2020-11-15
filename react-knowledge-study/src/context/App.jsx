import React, { Component } from "react";
import { Provider, testContext, Consumer } from './testContext';

class ChildA extends Component {
  static contextType = testContext;

  render() {
    return <div> child a: {this.context} </div>;
  }
}

class ChildB extends Component {
  render() {
    return (
      <div>
        <ChildC />
      </div>
    );
  }
}

class ChildC extends Component {
  render() {
    return (
      <div>
        <ChildD />
      </div>
    );
  }
}

class ChildD extends Component {
  render() {
    return <div> child d:
      <Consumer>
        {
          (value) => <div>{value}</div>
        }
      </Consumer>
    </div>;
  }
}

class App extends Component {
  render() {
    return (
      <Provider value="hello">
        <ChildA></ChildA>
        <ChildB></ChildB>
      </Provider>
    );
  }
}

export default App;
