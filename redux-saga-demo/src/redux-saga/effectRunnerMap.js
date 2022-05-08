import * as effectTypes from './effectTypes'

function runTakeEffect(env, payload, next) {
  const matcher = action => action.type === payload.pattern
  env.channel.take(next, matcher) // 订阅
}
/**
 * 向仓库派发动作
*/
function runPutEffect(env, payload, next) {
  // dispatch是经过中间件改造后的 store.dispatch
  env.dispatch(payload.action)
  next()
}


const effectRunnerMap = {
  [effectTypes.TAKE]: runTakeEffect,
  [effectTypes.PUT]: runPutEffect,
}

export default effectRunnerMap