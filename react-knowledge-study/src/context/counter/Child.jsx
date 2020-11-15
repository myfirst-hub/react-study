import React, { Component } from "react";

import { CountConsumer } from "./Count";
import ChildHood from "./ChildHood";

class Child extends Component {
  render() {
    return (
      <div>
        <CountConsumer>{({ count }) => <div>{count}</div>}</CountConsumer>
        <ChildHood></ChildHood>
      </div>
    );
  }
}

export default Child;
