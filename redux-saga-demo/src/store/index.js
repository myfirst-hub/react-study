// import { createStore } from 'redux' // applyMiddleware
import { applyMiddleware, createStore } from 'redux/src'
import reducer from './reducer'
// import createSagaMiddleware from 'redux-saga'
import createSagaMiddleware from '../redux-saga'
import { rootSaga } from './saga' // saga其实是一个generator(生成器)
let sagaMiddleware = createSagaMiddleware()
// let store = createStore(reducer)
let store = applyMiddleware(sagaMiddleware)(createStore)(reducer)
// 负责执行saga
sagaMiddleware.run(rootSaga)
export default store

/**
 * store={
 * getState, 可以获取 最新的状态
 * subscribe, 实现状态变更的订阅
 * dispatch, 可以向仓库派发最新的动作
 * }
*/