import proc from './proc'

export function runSaga({ channel, dispatch, getState }, rootSaga) {
  let iterator = rootSaga()
  const env = {
    channel, dispatch, getState
  }
  proc(env, iterator)
}