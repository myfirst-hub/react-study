import { combineReducers } from 'redux/src/index'

function todoAction(state = [], action) {
  switch (action.type) {
  case 'send_type':
    return state.concat([action.value])
  default:
    return state
  }
}

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

console.log('children...............', children)

export default combineReducers({
  todoAction,
  counter,
})