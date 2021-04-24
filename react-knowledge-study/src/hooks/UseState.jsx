import React, { useState } from "react";

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
  let [countState, setCount] = useState({
    count: 0,
    name: 'zhansan'
  });
  function handleClick() {
    console.log('countState000............................', countState);
    setCount((state) => {
      console.log('state...............', state);
      return {
        ...state,
        count: countState.count + 1,
      }
    });
    console.log('countState............................', countState);
  }
  return (
    <div>
      <span>{countState.count}</span>
      <button onClick={handleClick}>add</button>
      <div>{countState.name}</div>
    </div>
  );
}
export default UseState;
