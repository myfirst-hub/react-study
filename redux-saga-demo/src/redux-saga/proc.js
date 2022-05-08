import effectRunnerMap from './effectRunnerMap.js'
/**
 * Co的原理 自动运行迭代器
 * param {*} env
 * param {*} iterator
*/
export default function proc(env, iterator) {
  function next(args) {
    let result
    result = iterator.next(args)
    if (!result.done) {
      runEffect(result.value, next)
    }
  }
  function runEffect(effect, next) {
    if(effect) {
      // 为了能够处理不同类型的effect走不同的执行流程
      const effectRunner = effectRunnerMap[effect.type]
      effectRunner(env, effect.payload, next)
    } else {
      next()
    }
  }
  next()
}