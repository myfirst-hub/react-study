import React, { Component } from "react";
import { CountConsumer } from "./Count";
import { Consumer as ShowConsumer } from "./showContext";

class ChildHood extends Component {
  render() {
    return (
      <div>
        <CountConsumer>
          {({ count, increment, decrement }) => {
            return (
              <>
                <button onClick={() => decrement(1)}>-</button>
                <ShowConsumer>
                  {({ show }) => (
                    <div>
                      {count} / {show}
                    </div>
                  )}
                </ShowConsumer>
                <button onClick={() => increment(1)}>+</button>
              </>
            );
          }}
        </CountConsumer>
      </div>
    );
  }
}

export default ChildHood;
