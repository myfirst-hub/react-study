import React, { useReducer } from 'react';

const initState = {
  count: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return {
        count: state.count + 1
      }
    case 'minus':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

function UseReducer(){
  let [state, dispatch] = useReducer(reducer, initState);
  console.log('state..................', state)
  return (
    <div>
      <button onClick={() => dispatch({type: 'minus'})}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({type: 'add'})}>+</button>
    </div>
  )
}

export default UseReducer;