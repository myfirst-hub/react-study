import React from 'react';
// 导入我们的store
import store from './store'
import ComA from './pages/ComA'
// import ComB from './pages/ComB'
//导入Provider组件，利用这个组件包裹我们的结构，从而能够达到统一维护store的效果
// import { Provider } from 'react-redux'
import { Provider } from 'react-redux/src/index'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComA loading={false} />
        {/* <ComB/> */}
      </div>
    </Provider>
  );
}

export default App;
