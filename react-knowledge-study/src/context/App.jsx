import React, { Component, Suspense } from "react";
// import Loadable from 'react-loadable';
import { Provider, testContext, Consumer } from './testContext';

// const BaseTest = require('../baseTest/index')
// console.log('BaseTest................', BaseTest)

// const BaseTest = React.lazy(() => import('../baseTest/index').then(module => {
//   console.log('module................', module)
// }))
// console.log('BaseTest............', BaseTest)

// const LoadableComponent = Loadable({
//   loader: () => import('../baseTest/index'),
//   loading() {
//       return <div>正在加载</div>
//   },
// });

// console.log('LoadableComponent............', LoadableComponent)

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
  constructor(props) {
    super(props)
    this.state = {
      BaseTest: null
    }
  }
  componentWillMount() {
    import('../baseTest/index').then(module => {
      console.log('module................', module)
      this.setState(state => ({
        ...state,
        BaseTest: module.default
      }))
    })
  }
  
  render() {
    const { BaseTest } = this.state
    console.log('BaseTest.................', BaseTest)
    return <div> child d:
      {/* <Consumer>
        {
          (value) => <div>{value}</div>
        }
      </Consumer> */}

      {/* <Suspense fallback={<div>Loading...</div>}>
        <BaseTest />
      </Suspense> */}
      {
        BaseTest && (
          <BaseTest />
        )
      }
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

console.log('App..............', typeof App)

export default App;
