import React, { useEffect, useState } from "react";

import { createStore, applyMiddleware } from 'redux/src';
import thunk from 'redux-thunk/dist/redux-thunk';
import rootReducer from './reducers';

// createStore的时候传入thunk中间件
const store = createStore(rootReducer, applyMiddleware(thunk));

// 发起网络请求的方法
function fetchSecretSauce() {
  return Promise.resolve(3);
}

// 下面两个是普通的action
function makeASandwich(forPerson, secretSauce) {
  return {
    type: 'MAKE_SANDWICH',
    forPerson,
    secretSauce,
  };
}

function apologize(fromPerson, toPerson, error) {
  return {
    type: 'APOLOGIZE',
    fromPerson,
    toPerson,
    error,
  };
}

// 这是一个异步action，先请求网络，成功就makeASandwich，失败就apologize
function makeASandwichWithSecretSauce(forPerson) {
  return function (dispatch) {
    console.log('dispatch..............', dispatch)
    return fetchSecretSauce().then(
      (sauce) => dispatch(makeASandwich(forPerson, sauce)),
      (error) => dispatch(apologize('The Sandwich Shop', forPerson, error)),
    );
  };
}

function App() {

  const handleClick = () => {
    console.log('store.dispatch.................', store.dispatch)
    // 最终dispatch的是异步action makeASandwichWithSecretSauce
    store.dispatch(
      makeASandwichWithSecretSauce('Me')
    ).then(() => {
      console.log("It works.")
    }, (error) => {
      console.log("Thunk works, but others not: " + error)
    });
  }

  const [state, setState] = useState(false)

  useEffect(() => {
    store.subscribe(() => {
      console.log('store.getState()/.................. ', store.getState());
      // setState(!state)
    })
  }, [])
  return (
    <>
      <button onClick={handleClick}>点我，发送一个action</button>
      <div>{store.getState().stSauce}</div>
    </>
  );
}

export default App;
