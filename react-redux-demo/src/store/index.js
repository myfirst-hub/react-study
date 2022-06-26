import { createStore } from 'redux/src/index';
//导入我们自己创建好的reducer
import { reducer } from '../reducer'
//构建store
export default createStore(reducer);
