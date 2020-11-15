import React, { Component } from "react";

import { CountProvider } from "./Count";
import Child from "./Child";

class App extends Component {
  render() {
    return (
      <CountProvider>
        <Child></Child>
      </CountProvider>
    );
  }
}

export default App;
