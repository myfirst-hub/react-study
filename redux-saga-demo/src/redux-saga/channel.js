
export function stdChannel() {
  let currentTakes = []
  /**
   * @param {*} cb 回调函数
   * @param {*} matcher 匹配器
  */
  function take(cb, matcher) { // 订阅
    cb['MATCH']=matcher
    cb.cancel = () => {
      currentTakes = currentTakes.filter(item => item !== cb)
    }
    currentTakes.push(cb)
  }

  function put(input) { // 发布
    for(let i = 0; i < currentTakes.length; i++) {
      let taker = currentTakes[i]
      if (taker['MATCH'](input)) {
        taker.cancel() // 只触发一次put
        taker(input)
      }
    }
  }
  return { take, put }
}

// let channel = stdChannel()
// function next(input) {
//   console.log('我要继续执行了', input)
// }
// function matcher (input) {
//   return input.type === 'ASYNC_ADD'
// }
// channel.take(next, matcher)
// channel.put({ type: 'ASYNC_ADD' })
// channel.put({ type: 'ASYNC_ADD' })