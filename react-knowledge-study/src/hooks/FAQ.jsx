import React, { useState, useEffect, useRef } from "react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    console.log('value,,,,,,,,,,,,,,,', value)
    ref.current = value;
    return () => {
      console.log('销毁。。。。。。。。。。。。。。。。。。')
    }
  });
  console.log('ref.current.................', ref.current)
  return ref.current;
}

// 保存上一轮的 props 或 state
function Counter() {
  const [count, setCount] = useState(() => {
    // 只在初始化渲染时执行一次
    console.log('init.................')
    return 0;
  });
  console.log('count..................', count)
  const prevCount = usePrevious(count);
  return (
    <div>
      <h1>Now: {count}, before: {prevCount}</h1>
      <button onClick={() => setCount(count + 1)}>onChange</button>
    </div>
  );
}

export default Counter