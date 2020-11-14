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
    default:
      return state
  }
}
