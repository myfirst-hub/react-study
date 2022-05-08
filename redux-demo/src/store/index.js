// import { createStore } from 'redux';
import { createStore } from 'redux/src/index'
//导入我们自己创建好的reducer
// import { reducer } from '../reducer'
import reducer from '../combineReducers'
//构建store
const store = createStore(reducer);

export default store;