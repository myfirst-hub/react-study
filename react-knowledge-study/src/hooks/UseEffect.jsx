import React, { useState, useEffect } from "react";

function UseEffect (props) {
  let [data, setData] = useState({ count: 0 });

  // 初始化和数据变更都执行
  useEffect(() => {
    console.log("componentDidMount+componentDidUpdate");
  });
  // 初始化执行
  // 如果数组[]里有值，若对应的值变更，则相应执行
  useEffect(() => {
    console.log("componentDidMount");
  }, []);
  useEffect(() => {
    return () => {
      console.log("componentUnMount");
    }
  }, []);
  return (
    <>
      <div>{data.count}</div>
      <button onClick={() => setData(() => ({ count: data.count + 1 }))}>
        click
      </button>
    </>
  );
}

export default UseEffect