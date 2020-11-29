import React, { Component, useState } from "react";

// export default class UseState extends Component {
//   state = {
//     count: 0,
//   }
//   handleClick = () => {
//     this.setState(state => ({count: state.count + 1}))
//   }
//   render(){
//     return (
//       <div>
//         <span>{this.state.count}</span>
//         <button onClick={this.handleClick}>add</button>
//       </div>
//     )
//   }
// }

function UseState(props) {
  let [count, setCount] = useState(0);
  function handleClick() {
    setCount((count) => {
      return count + 1;
    });
  }
  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClick}>add</button>
    </div>
  );
}
export default UseState;
