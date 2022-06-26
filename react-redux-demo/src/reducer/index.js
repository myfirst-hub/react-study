/**
 * 接受两个参数
 * state,action
*/

const initState = {
  count: 0,
}

exports.reducer = (state = initState, action) => {
  switch(action.type){
    case 'add_action':
      return {
        count: state.count + 1
      }
    case 'add_action_son':
      return {
        count: state.count + 2
      }
    default:
      return state
  }
}
